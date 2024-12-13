// change handler

const handleEntreeChange = (changeEvent) => {
    if (changeEvent.target.name === "entreeoption") {
        const entreeChoice = changeEvent.target.value
        console.log(parseInt(entreeChoice))
    }
}

// component function
export const generateEntreeHTML = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    const entreesArray = entrees.map((entree) => {
        return `<div>
        <input type="radio" name="entreeoption" value="${entree.id}"/> ${entree.name}
        </div>
        `
    })

    let entreesHTML = entreesArray.join("")

    document.addEventListener("change", handleEntreeChange)

    return entreesHTML
}