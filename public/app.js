async function getDinoTypeForDropDown() {
    const url = "https://ark-tracker.onrender.com/dino/types"
    const response = await fetch(url)
    const data = await response.json() 
    console.log(data)
}

getDinoTypeForDropDown();

