let dinoTypeArray = []


async function getDinoTypeForDropDown() {
    const url = "https://ark-tracker.onrender.com/dino/types"
    const response = await fetch(url)
    dinoTypeArray = await response.json() 
    console.log(dinoTypeArray)
};
getDinoTypeForDropDown();

function createNavbarDropDown(){
    const div = document.getElementById('dropdown1')
    dinoTypeArray.forEach((e) => {
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
createNavbarDropDown();


async function getDinosByType(id){
    const url = `https://ark-tracker.onrender.com/dino_by_type/${id}`
    const response = await fetch(url)
    data = await response.json() 
    console.log(data)
    createCollectionList(arr)
}

 
function createCollectionList(arr){
}
    
// async function carousolGetDinoList(){}
// async function createDinoType(){}


// const url = `https://ark-tracker.onrender.com/dino_by_type/${a.id}`
// const response = await fetch(url)
// dinoTypeArray = await response.json() 