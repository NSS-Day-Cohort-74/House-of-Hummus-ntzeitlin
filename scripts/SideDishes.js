import { setSideChoice } from "./TransientState.js"

const handleSideChange = (changeEvent) => {
    if (changeEvent.target.name === "sideoption") {
        const sideChoice = changeEvent.target.value
        setSideChoice(parseInt(sideChoice))
    }
}


export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    const sidesArray = sides.map((side) => {
        if (side.id !== 0) {
            return `<div>
            <input type="radio" name="sideoption" value="${side.id}"/> ${side.title}
            </div>
            `
        }
    })

    let sidesHTML = sidesArray.join("")

    document.addEventListener("change", handleSideChange)

    return sidesHTML
}

