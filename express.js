const express = require('express'); 
const client = require('./pg');

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000
const url = process.env.DATABASE_URL

app.use(express.json());
app.use(express.static("public"));

app.route('/dino/types')
// get all
    .get( async (req,res) => {
        try {
            const result = await client.query('SELECT * FROM dino_types')
            res.status(200).json(result.rows)
        } catch (error) {
            res.status(500).type('text/plain').send(error)
        }
    })
    .post( async (req, res ) => {
        let { body } = req
        console.log(body)
        if (createDinoTypeValidation(body)) {
            try {
                await client.query('INSERT INTO dino_types (type) VALUES ($1)', [body.type])
                res.status(200).type('application/json').send('Dino Type Added Successfully')
            } catch (error) {
                res.status(500).type('text/plain').send(error)
            };
        } else {
            res.status(400).type('text/plain').send('BAD REQUEST')
        }
    })

app.route('/dino/type/:id')
    .get( async ( req, res ) => {
        let { id } = req.params
        try {
            const result = await client.query('SELECT * FROM dinos WHERE dino_type_id = $1', [ id ])
            res.status(200).type('application/json').json(result.rows)
        } catch {
            res.status(500).type('text/plain').send(error)
        }
    })

app.route('/dinos')
// get all
    .get( async (req,res) => {
        try {
            const result = await client.query('SELECT * FROM dinos')
            res.status(200).json(result.rows)
        } catch (error) {
            res.status(500).type('text/plain').send(error)
        }
    }) 
// Create one
    .post( async (req, res ) => {
        let { body } = req
        if (createDinoValidation(body)) {
            try {
                await client.query('INSERT INTO dinos (dino_type_id, name, gender, health, stamina, weight, melee) VALUES ($1, $2, $3, $4, $5, $6, $7)', [body.dino_type_id, body.name, body.gender, body.health, body.stamina, body.weight, body.melee])
                res.status(200).type('application/json').send('Dino Added Successfully')
            } catch (error) {
                res.status(500).type('text/plain').send(error)
            };
        } else {
            res.status(400).type('text/plain').send('BAD REQUEST')
        }
    })

app.route ('/dinos/:id')
// get one
    .get( async ( req, res ) => {
        let { id } = req.params
        try {
            const result = await client.query('SELECT * FROM dinos WHERE dino_id = $1', [ id ])
            res.status(200).type('application/json').json(result.rows)
        } catch {
            res.status(500).type('text/plain').send(error)
        }
    })
// update one
    .put ( async ( req, res ) => {
        let { id } = req.params
        let { body } = req   
        if (createDinoValidation(body)) {
            try {
                console.log(body)
                await client.query (`UPDATE dinos SET dino_type_id = ${body.dino_type_id}, name = '${body.name}', gender = '${body.gender}', health = ${body.health}, stamina = ${body.stamina}, weight = ${body.weight}, melee = ${body.melee} WHERE dino_id = ${id}`)
                res.status(200).type('application/json').send('Dino Updated Successfully')
            } catch(error) {
                res.status(500).type('text/plain').send(error)
            }
        } else {
            res.status(400).type('text/plain').send("BAD REQUEST")
        }
    })
// delete one.
    .delete ( async ( req, res ) => {
        let { id } = req.params
        try {
            const result = await client.query('DELETE FROM dinos WHERE dino_id = $1', [id])
            res.status(200).type('application/json').send('Dino Deleted Successfully')
        } catch (error) {
            res.status(500).type('text/plain').send(error)
        }
    })

// Responds with error if no routes are hit
app.use((req, res) => {
    res.status(404).type('text/plain').send('Not found')
})

// Server Listening
app.listen(port, () => {
    console.log(`Server listening`)
})

// post data valid datiion
function createDinoValidation(obj) {
    let type = false;
    let name = false;
    let gender = false;
    let health = false;
    let stamina = false;
    let weight = false;
    let melee = false;
    for (key in obj) {
        if (key === 'dino_type_id' && obj[key] !== NaN) {
            type = true;
        } else if (key === 'name' && obj[key] !== '' && (typeof obj[key]) === 'string') {
            name = true;
        } else if (key === 'gender' && obj[key] !== '' && (typeof obj[key]) === 'string') {
            gender = true;
        } else if (key === 'health' && obj[key] !== NaN) {
            health = true;
        } else if (key === 'stamina' && obj[key] !== NaN) {
            stamina = true;
        } else if (key === 'weight' && obj[key] !== NaN) {
            weight = true;
        } else if (key === 'melee' && obj[key] !== NaN) {
            melee = true;
        }
    }
    if (type && name && gender && health && stamina && weight && melee) {
        return true
    } else return false
}

function createDinoTypeValidation(obj) {
    let type = false;
    for (key in obj) {
        if (key === 'type' && obj[key] !== '' && (typeof obj[key]) === 'string') {
            type = true;
        }
    }
     
    if (type) {
        return true
    } else return false;
}

