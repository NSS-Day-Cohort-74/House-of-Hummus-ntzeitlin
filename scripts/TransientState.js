// initialize transient state
let transientState = {
    "id": 0,
    "entreeId": 0,
    "sideId": 0,
    "vegetableId": 0
}

const resetTransientState = () => {
    transientState = {
        "id": 0,
        "entreeId": 0,
        "sideId": 0,
        "vegetableId": 0
    }
}

// state setter functions
export const setEntreeChoice = (entreeChoice) => {
    if (entreeChoice !== 0) {
        transientState.entreeId = entreeChoice
    }
    console.log(transientState)
}

export const setSideChoice = (sideChoice) => {
    if (sideChoice !== 0) {
        transientState.sideId = sideChoice
    }
    console.log(transientState)
}

export const setVegChoice = (vegChoice) => {
    if (vegChoice !== 0) {
        transientState.vegetableId = vegChoice
    }
    console.log(transientState)
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
