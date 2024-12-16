// initialize transient state
const transientState = {
    "id": 0,
    "entreeId": 0,
    "sideId": 0,
    "vegetableId": 0
}

const resetTransientState = () => {
    setEntreeChoice(0)
    setSideChoice(0)
    setVegChoice(0)
}

// state setter functions
export const setEntreeChoice = (entreeChoice) => {
    transientState.entreeId = entreeChoice
}

export const setSideChoice = (sideChoice) => {
    transientState.sideId = sideChoice
}

export const setVegChoice = (vegChoice) => {
    transientState.vegetableId = vegChoice
}

// send to permanent state

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/purchases", postOptions)

    resetTransientState()

    const customEvent = new CustomEvent("orderPlaced")
    document.dispatchEvent(customEvent)
}
