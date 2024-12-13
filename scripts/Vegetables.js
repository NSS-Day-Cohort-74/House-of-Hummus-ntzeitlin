const handleVegChange = (changeEvent) => {
    if (changeEvent.target.name === "vegetableoption") {
        const vegChoice = changeEvent.target.value
        console.log(parseInt(vegChoice))
    }
}

export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    const vegArray = vegetables.map((veg) => {
        return `<div>
        <input type="radio" name="vegetableoption" value="${veg.id}"/> ${veg.type}
        </div>
        `
    })

    let vegHTML = vegArray.join("")

    document.addEventListener("change", handleVegChange)

    return vegHTML
}
