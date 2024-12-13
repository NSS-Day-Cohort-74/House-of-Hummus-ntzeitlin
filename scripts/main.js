import { FoodTruck } from "./FoodTruck.js"

// DOM element targeting
const mainContainer = document.querySelector("#container")

// Render function
const renderAllHTML = async () => {

    const foodTruckHTML = await FoodTruck()

    mainContainer.innerHTML = foodTruckHTML

}

// event listener to rerender
document.addEventListener("orderPlaced", event => {
    renderAllHTML()
})

// initial render
renderAllHTML()

