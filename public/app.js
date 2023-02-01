const { data } = require("jquery")

let dinoTypeArray = []


async function getDinoTypeForDropDown() {
    const url = "https://ark-tracker.onrender.com/dino/types"
    const response = await fetch(url)
    dinoTypeArray = await response.json() 
    createNavbarDropDown(dinoTypeArray)
};

getDinoTypeForDropDown();

async function createNavbarDropDown(arr){
    const div = document.getElementById('dropdown1')
    arr.forEach((e) => {
        const li = document.createElement('li')
        div.append(li)
        const a = document.createElement('a')
        a.id = `${e.dino_type_id}`
        a.classList.add("navbar-item", "waves-effect", "waves-teal", "btn-flat")
        a.innerHTML = `${e.type}`
        a.addEventListener('click', (event) => {
            $("#dino-type-btn-cont").hide();
            $("#caraousel-container").hide();
            getDinosByType(a.id)
        })
        console.log(a)
        li.append(a)
    });
};




async function getDinosByType(id){
    const url = `https://ark-tracker.onrender.com/dino/type/${id}`
    const response = await fetch(url)
    data = await response.json() 
    console.log(data)
    createCollectionList(data)
}

 
function createCollectionList(arr){
}
    
// async function carousolGetDinoList(){}
// async function createDinoType(){}


// const url = `https://ark-tracker.onrender.com/dino_by_type/${a.id}`
// const response = await fetch(url)
// dinoTypeArray = await response.json() 