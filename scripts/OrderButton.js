import { placeOrder } from "./TransientState.js"

const handleButtonClick = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        placeOrder()
    }
}

export const generateOrderButton = () => {
    document.addEventListener("click", handleButtonClick)

    return `<button id="purchase">Purchase Combo</button>`
}