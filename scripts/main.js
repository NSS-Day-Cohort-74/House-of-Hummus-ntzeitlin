import { FoodTruck } from "./FoodTruck.js"
import { Sales } from "./Sales.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {

    const foodTruckHTML = FoodTruck()
    const salesListHTML = await Sales()


    const composedHTML = `
        ${foodTruckHTML}
    
        <article>
            <button id="purchase">Purchase Combo</button>
        </article>
        
        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesListHTML}
        </article>
    `
    mainContainer.innerHTML = composedHTML

}

renderAllHTML()

