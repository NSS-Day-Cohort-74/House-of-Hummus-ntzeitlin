// change handler

import { setEntreeChoice } from "./TransientState.js"

const handleEntreeChange = (changeEvent) => {
    if (changeEvent.target.name === "entreeoption") {
        const entreeChoice = changeEvent.target.value
        setEntreeChoice(parseInt(entreeChoice))
    }
}

// component function
export const generateEntreeHTML = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    const entreesArray = entrees.map((entree) => {
        if (entree.id !== 0) {
            return `<div>
            <input type="radio" name="entreeoption" value="${entree.id}"/> ${entree.name}
            </div>
            `
        }
    })

    let entreesHTML = entreesArray.join("")

    document.addEventListener("change", handleEntreeChange)

    return entreesHTML
}