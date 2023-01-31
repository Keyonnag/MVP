let dinoTypeArray = []


async function getDinoTypeForDropDown() {
    const div = document.getElementById('dropdown1')
    
    const url = "https://ark-tracker.onrender.com/dino/types"
    const response = await fetch(url)
    dinoTypeArray = await response.json() 
    console.log(dinoTypeArray)
    dinoTypeArray.forEach((e) => {
        const li = document.createElement('li')
        div.append(li)
        const a = document.createElement('a')
        a.id = `${e.dino_type_id}`
        a.classList.add("navbar-item", "waves-effect", "waves-teal", "btn-flat")
        a.innerHTML = `${e.type}`
        console.log(a)
        li.append(a)
    });
};

getDinoTypeForDropDown();
 

async function createCardList(){

}
    
// async function carousolGetDinoList(){}
// async function createDinoType(){}


// const url = `https://ark-tracker.onrender.com/dino_by_type/${a.id}`
// const response = await fetch(url)
// dinoTypeArray = await response.json() 