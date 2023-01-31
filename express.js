const express = require('express'); 
const client = require('./pg');
const postgres = require ("postgres");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000
const url = process.env.DATABASE_URL

app.use(express.json());
app.use(express.static("public"));


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
        console.log(body)
        if (createDinoValidation(body)) {
            try {
                const result = await client.query('INSERT INTO dinos (type, name, gender, health, stamina, weight, melee) VALUES ($1, $2, $3, $4, $5, $6, $7)', [body.type, body.name, body.gender, body.health, body.stamina, body.weight, body.melee])
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
                const result = client.query ('UPDATE dinos SET type = $1, name = $2, gender = $3, health = $4, stamina = $5, weight = $6, melee = $7 WHERE dino_id = $8', [body.type, body.name, body.gender, body.health, body.stamina, body.weight, body.melee, id])
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
    let dino_name = false;
    let gender = false;
    let health = false;
    let stamina = false;
    let weight = false;
    let melee = false;
    for (key in obj) {
        if (key === 'type' && obj[key] !== '' && (typeof obj[key]) === 'string') {
            type = true;
        } else if (key === 'name' && obj[key] !== '' && (typeof obj[key]) === 'string') {
            dino_name = true;
        } else if (key === 'gender' && obj[key] !== '' && (typeof obj[key]) === 'string') {
            gender = true;
        } else if (key === 'health' && (typeof obj[key] === 'number') && obj[key] !== null) {
            health = true;
        } else if (key === 'stamina' && (typeof obj[key] === 'number') && obj[key] !== null) {
            stamina = true;
        } else if (key === 'weight' && (typeof obj[key] === 'number') && obj[key] !== null) {
            weight = true;
        } else if (key === 'melee' && (typeof obj[key] === 'number') && obj[key] !== null) {
            melee = true;
        }
    }
    if (type && dino_name && gender && health && stamina && weight && melee) {
        return true
    } else return false
}

