const handleButtonClick = (clickEvent) => {
    if (clickEvent.target.id = "purchase") {
        console.log("button pressed")
    }
}

export const generateOrderButton = () => {
    document.addEventListener("click", handleButtonClick)
    return `<button id="purchase">Purchase Combo</button>`
}