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
        a.classList.add("navbar-item")
        a.innerHTML = `${e.type}`
        console.log(a)
        a.addEventListener('click', (event) => {
        })
        li.append(a)
    });
};

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });


getDinoTypeForDropDown();


// const url = `https://ark-tracker.onrender.com/dino_by_type/${a.id}`
// const response = await fetch(url)
// dinoTypeArray = await response.json() 