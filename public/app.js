
async function getDinoTypeForDropDown() {
    const url = "https://ark-tracker.onrender.com/dino/types"
    const response = await fetch(url)
    const dinoTypeArray = await response.json() 
    createNavbarDropDown(dinoTypeArray)
    createDinoTypeSelectorForDropDown(dinoTypeArray)
};

getDinoTypeForDropDown();
// todo: add an event listenert to hand database updates

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

async function createDinoTypeSelectorForDropDown(arr) {
    const div = document.getElementById('DinoTypeSelector')
    arr.forEach((e) => {
        const option = document.createElement('option')
        option.value = `${e.dino_type_id}`
        option.innerHTML = `${e.type}`
        div.append(option)
    })
}




async function getDinosByType(id){
    const url = `https://ark-tracker.onrender.com/dino/type/${id}`
    const response = await fetch(url)
    data = await response.json() 
    console.log(data)
    createCollectionList(data)
}

 
function createCollectionList(arr){
    const row = document.getElementById('dinoByTypeRow');
    $("#dinoByTypeRow").empty();
    $("#dinoByTypeRow").show();

    arr.forEach((e) => {
        let dinoNameData = e.name
        let genderData = e.gender
        let healthData = e.health
        let staminaData = e.stamina
        let weightData = e.weight
        let meleeData = e.melee

      const column = document.createElement('div')
      column.classList.add("col", "s6")
      row.append(column)

      const collection = document.createElement('ul')
      collection.classList.add('collection')
      column.append(collection)
      
      const nameList = document.createElement('li')
      nameList.classList.add('collection-item', 'avatar')
      collection.append(nameList)
      
      const arkImg = document.createElement('img')
      arkImg.src ="img/arkEmblem.png"
      arkImg.classList.add('circle')
      nameList.append(arkImg)

      const dinoName = document.createElement('span')
      dinoName.classList.add('title')
      dinoName.innerHTML = dinoNameData
      nameList.append(dinoName)
      
      const genderList = document.createElement('li')
      genderList.classList.add('collection-item', 'avatar')
      collection.append(genderList)
      
      const genderIcon = document.createElement('i')
      genderIcon.classList.add('material-icons', 'circle')
      genderIcon.innerHTML = 'transgender'
      genderList.append(genderIcon)
      
      const genderTitle = document.createElement('span')
      genderTitle.classList.add('title')
      genderTitle.innerHTML = 'Gender'
      genderList.append(genderTitle)
      
      const gender = document.createElement('p')
      gender.innerHTML = genderData
      genderList.append(gender)
      
      const healthList = document.createElement('li')
      healthList.classList.add('collection-item', 'avatar')
      collection.append(healthList)
      
      const healthIcon = document.createElement('i')
      healthIcon.classList.add('material-icons', 'circle', 'red')
      healthIcon.innerHTML = 'favorite'
      healthList.append(healthIcon)
      
      const healthTitle = document.createElement('span')
      healthTitle.classList.add('title')
      healthTitle.innerHTML = 'Health'
      healthList.append(healthTitle)
      
      const health = document.createElement('p')
      health.innerHTML = healthData
      healthList.append(health)
      
      const staminaList = document.createElement('li')
      staminaList.classList.add('collection-item', 'avatar')
      collection.append(staminaList)
      
      const staminaIcon = document.createElement('i')
      staminaIcon.classList.add('material-icons', 'circle', 'yellow')
      staminaIcon.innerHTML = 'bolt'
      staminaList.append(staminaIcon)
      
      const staminaTitle = document.createElement('span')
      staminaTitle.classList.add('title')
      staminaTitle.innerHTML = 'Stamina'
      staminaList.append(staminaTitle)
      
      const stamina = document.createElement('p')
      stamina.innerHTML = staminaData
      staminaList.append(stamina)
      
      const weightList = document.createElement('li')
      weightList.classList.add('collection-item', 'avatar')
      collection.append(weightList)
      
      const weightIcon = document.createElement('i')
      weightIcon.classList.add('material-icons', 'circle', 'indigo')
      weightIcon.innerHTML = 'fitness_center'
      weightList.append(weightIcon)
      
      const weightTitle = document.createElement('span')
      weightTitle.classList.add('title')
      weightTitle.innerHTML = 'Weight'
      weightList.append(weightTitle)
      
      const weight = document.createElement('p')
      weight.innerHTML = weightData
      weightList.append(weight)
      
      const meleeList = document.createElement('li')
      meleeList.classList.add('collection-item', 'avatar')
      collection.append(meleeList)
      
      const meleeIcon = document.createElement('i')
      meleeIcon.classList.add('material-icons', 'circle', 'orange')
      meleeIcon.innerHTML = 'sports_martial_arts'
      meleeList.append(meleeIcon)
      
      const meleeTitle = document.createElement('span')
      meleeTitle.classList.add('title')
      meleeTitle.innerHTML = 'Melee'
      meleeList.append(meleeTitle)

      const melee = document.createElement('p')
      melee.innerHTML = meleeData
      meleeList.append(melee)
      
    })
    console.log(row)
}

var form = document.querySelector('form');
var data = new FormData(form);
console.log(data)
    
// async function carousolGetDinoList(){}
// async function createDinoType(){}


// const url = `https://ark-tracker.onrender.com/dino_by_type/${a.id}`
// const response = await fetch(url)
// dinoTypeArray = await response.json() 