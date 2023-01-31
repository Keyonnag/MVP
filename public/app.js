let dinoTypeArray = []

function dropdowns() {
    var dropdowns = document.getElementById('navDropDown');

    if (dropdowns.length > 0) {
        dropdowns.forEach(function (el) {
            el.addEventListener('click', function (event) {
                event.stopPropagation();

                closeDropdowns(); // <== HERE
                el.classList.toggle('is-active');
            });
        });

        document.addEventListener('click', function (event) {
            closeDropdowns();
        });
    }

    function closeDropdowns() {
        dropdowns.forEach(function (el) {
            el.classList.remove('is-active');
        });
    }
}

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
        a.addEventListener('click', (event) => {
        })
    });
};


getDinoTypeForDropDown();


// const url = `https://ark-tracker.onrender.com/dino_by_type/${a.id}`
// const response = await fetch(url)
// dinoTypeArray = await response.json() 