let dinoTypeArray = []



async function getDinoTypeForDropDown() {
    const div = document.getElementById('dropDown')
    const url = "https://ark-tracker.onrender.com/dino/types"
    const response = await fetch(url)
    dinoTypeArray = await response.json() 
    console.log(dinoTypeArray)
    dinoTypeArray.forEach((e) => {
        const a = document.createElement('a')
        a.id = `${e.dino_type_id}`
        a.classList.add("navbar-item")
        a.innerHTML = `${e.type}`
        div.append(a)
        console.log(a)
        a.addEventListener('click', async (event) => {
            const url = `https://ark-tracker.onrender.com/dino_by_type/${a.id}`
            const response = await fetch(url)
            let data = await response.json()
        })
    });
};


getDinoTypeForDropDown();


const url = `https://ark-tracker.onrender.com/dino_by_type/${a.id}`
const response = await fetch(url)
dinoTypeArray = await response.json() 