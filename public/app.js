const apiURL = ""
const createDinoBtn = document.getElementById("createDinoBtn")
const updateDinoBtn = document.getElementById("updateDinoBtn")
const createDinoTypeBtn = document.getElementById('createDinoTypeBtn')
let dinoUpdateId;



async function getDinoTypeForDropDown() {
    const url = `${apiURL}/dino/types`
    const response = await fetch(url)
    const dinoTypeArray = await response.json() 
    createNavbarDropDown(dinoTypeArray)
    createDinoTypeSelectorForDropDown(dinoTypeArray)
};



async function getDinosByType(id){
    const url = `${apiURL}/dino/type/${id}`
    const response = await fetch(url)
    data = await response.json() 
    createCollectionList(data)
}

const createNewDinoType = async (dinoType) => {
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            "type": `${dinoType}`
        })
    }

    const response = await fetch(`${apiURL}/dino/types`, options)
    const sqlQuery = await response.json()
}

const createNewDino = async (dinoType, dinoName, dinoGender, dinoHealth, dinoStamina, dinoWeight, dinoMelee) => {
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            "dino_type_id": `${dinoType}`,
            "name": `${dinoName}`,
            "gender": `${dinoGender}`,
            "health": `${dinoHealth}`,
            "stamina": `${dinoStamina}`,
            "weight": `${dinoWeight}`,
            "melee": `${dinoMelee}`
        })
    }

    const response = await fetch(`${apiURL}/dinos`, options)
    const sqlQuery = await response.json()
}

const updateDinoPutReq= async (dinoType, dinoName, dinoGender, dinoHealth, dinoStamina, dinoWeight, dinoMelee, id) => {
    const options = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            "dino_type_id": `${dinoType}`,
            "name": `${dinoName}`,
            "gender": `${dinoGender}`,
            "health": `${dinoHealth}`,
            "stamina": `${dinoStamina}`,
            "weight": `${dinoWeight}`,
            "melee": `${dinoMelee}`
        })
    }

    const response = await fetch(`${apiURL}/dinos/${id}`, options)
    const sqlQuery = await response.json()
}

async function deleteDinobyId(id) {
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(`${apiURL}/dinos/${id}`, options)
    const sqlQuery = await response.json() 
}

async function createNavbarDropDown(arr){
    const div = document.getElementById('dropdown1')
    arr.forEach((e) => {
        const li = document.createElement('li')
        div.append(li)
        const a = document.createElement('a')
        a.id = `${e.dino_type_id}`
        a.classList.add("navbar-item", "waves-effect", "waves-teal", "btn-flat")
        a.innerText = `${e.type}`
        a.addEventListener('click', (event) => {
            $("#dino-type-btn-cont").hide();
            $("#caraousel-container").hide();
            getDinosByType(a.id)
        })
        li.append(a)
    });
};

getDinoTypeForDropDown();

async function createDinoTypeSelectorForDropDown(arr) {
    const div = document.getElementById('DinoTypeSelector')
    arr.forEach((e) => {
        const option = document.createElement('option')
        option.value = `${e.dino_type_id}`
        option.innerText =`${e.type}`
        div.appendChild(option)
    })
    const update = document.getElementById('updateDinoTypeSelector')
    arr.forEach((e) => {
        const option = document.createElement('option')
        option.value = `${e.dino_type_id}`
        option.innerText =`${e.type}`
        update.appendChild(option)
    })
    $(document).ready(function() {
        $('select').formSelect();
    });
}


// todo: add an event listenert to handle database updates


createDinoBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const dinoType = document.getElementById('DinoTypeSelector')
    const dinoName = document.getElementById('dino_name')
    const dinoGender = document.getElementById('dino_gender')      
    const dinoHealth = document.getElementById('dino_health')      
    const dinoStamina = document.getElementById('dino_stamina')      
    const dinoWeight = document.getElementById('dino_weight')      
    const dinoMelee = document.getElementById('dino_melee')
    
    createNewDino(dinoType.value, dinoName.value, dinoGender.value, dinoHealth.value, dinoStamina.value, dinoWeight.value, dinoMelee.value)
});

updateDinoBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const dinoType = document.getElementById('updateDinoTypeSelector')
    const dinoName = document.getElementById('update_dino_name')
    const dinoGender = document.getElementById('update_dino_gender')      
    const dinoHealth = document.getElementById('update_dino_health')      
    const dinoStamina = document.getElementById('update_dino_stamina')      
    const dinoWeight = document.getElementById('update_dino_weight')      
    const dinoMelee = document.getElementById('update_dino_melee')
    let id = dinoUpdateId
    
    updateDinoPutReq(dinoType.value,dinoName.value, dinoGender.value, dinoHealth.value, dinoStamina.value, dinoWeight.value, dinoMelee.value, id)
});

createDinoTypeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const dinoTypeName = document.getElementById('dinoTypeName')    
    createNewDinoType(dinoTypeName.value)
});

const Megalosaurus = document.getElementById('1')
const RockDrake = document.getElementById('2')
const GlowTail = document.getElementById('3')
const Shadowmane = document.getElementById('4')
const Bulbdog = document.getElementById('5')
const Ravager = document.getElementById('6')

Megalosaurus.addEventListener('click', (e)=> {
    e.preventDefault();
    $("#dino-type-btn-cont").hide();
    $("#caraousel-container").hide();
    getDinosByType(e.target.id)
})
RockDrake.addEventListener('click', (e)=> {
    e.preventDefault();
    $("#dino-type-btn-cont").hide();
    $("#caraousel-container").hide();
    getDinosByType(e.target.id)
})
GlowTail.addEventListener('click', (e)=> {
    e.preventDefault();
    $("#dino-type-btn-cont").hide();
    $("#caraousel-container").hide();
    getDinosByType(e.target.id)
})
Shadowmane.addEventListener('click', (e)=> {
    e.preventDefault();
    $("#dino-type-btn-cont").hide();
    $("#caraousel-container").hide();
    getDinosByType(e.target.id)
})
Bulbdog.addEventListener('click', (e)=> {
    e.preventDefault();
    $("#dino-type-btn-cont").hide();
    $("#caraousel-container").hide();
    getDinosByType(e.target.id)
})
Ravager.addEventListener('click', (e)=> {
    e.preventDefault();
    $("#dino-type-btn-cont").hide();
    $("#caraousel-container").hide();
    getDinosByType(e.target.id)
})


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
        let idData = e.dino_id

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

      const dinoP = document.createElement('li')
      nameList.append(dinoP)

      const dinoUpdate = document.createElement('a')
      dinoUpdate.classList.add('left', `${idData}`, 'waves-effect', 'waves-light', 'btn-small', 'modal-trigger', 'hide-on-small-and-down')
      dinoUpdate.setAttribute('data-target', 'updateNewDino')
      dinoUpdate.id = idData
      dinoUpdate.innerHTML = 'Update'
      dinoUpdate.addEventListener('click', (e) => {
        dinoUpdateId = e.target.id;       
      })
      dinoP.append(dinoUpdate)

      const dinoDel = document.createElement('a')
      dinoDel.classList.add('right', `deleteBtn`,'waves-effect', 'waves-light', 'btn-small', 'red')
      dinoDel.id = idData
      dinoDel.innerHTML = 'Delete'
      dinoDel.addEventListener('click', (event) => {
        deleteDinobyId(dinoDel.id)
    })
      dinoP.append(dinoDel)
      
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
}
