import { generateEntreeHTML } from "./Entrees.js"
import { generateOrderButton } from "./OrderButton.js"
import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { Veggies } from "./Vegetables.js"

export const FoodTruck = async () => {
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
     <header class="header">
         <img src="./images/hummus.png" class="logo" />
         <h1 class="title">Laura Kathryn's House of Hummus</h1>
     </header>
     
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
 
     <article id="button">
         ${orderButtonHTML}
     </article>
     
     <article class="customerOrders">
         <h2>Monthly Sales</h2>
         ${salesListHTML}
     </article>
 `
    return composedHTML
}
