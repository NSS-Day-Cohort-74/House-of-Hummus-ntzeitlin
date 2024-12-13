import { generateEntreeHTML } from "./Entrees.js"
import { FoodTruck } from "./FoodTruck.js"
import { generateOrderButton } from "./OrderButton.js"
import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { Veggies } from "./Vegetables.js"

// DOM element targeting
const mainContainer = document.querySelector("#container")


// Render function
const renderAllHTML = async () => {

    // generate html
    // food truck branding
    const foodTruckHTML = FoodTruck()
    // sales list
    const salesListHTML = await Sales()
    // entree list
    const entreeListHTML = await generateEntreeHTML()
    // sides list
    const sidesHTML = await Sides()
    // veg list
    const vegHTML = await Veggies()
    // order button
    const orderButtonHTML = generateOrderButton()

    // compose html
    const composedHTML = `
        ${foodTruckHTML}
        
        <section class="choices">
            <article id="entreeorder" class="options">
                <h2>Entrees</h2>
                ${entreeListHTML}
                </article>
                
            <article id="sideorder" class="options">
                <h2>Sides</h2>
                ${sidesHTML}
                </article>
                
            <article id="vegorder" class="options">
                <h2>Veggies</h2>
                ${vegHTML}
            </article>
        </section>
    
        <article>
            ${orderButtonHTML}
        </article>
        
        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesListHTML}
        </article>
    `
    mainContainer.innerHTML = composedHTML

}

// event listener to rerender

// initial render
renderAllHTML()

