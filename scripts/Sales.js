export const Sales = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=side&_expand=vegetable")
    const sales = await response.json()

    const salesArray = sales.map((sale) => {
        const orderTotal = sale.entree.price + sale.vegetable.price + sale.side.price
        return `<div>Receipt #${sale.id} = $${orderTotal.toFixed(2)}</div> `
    })

    let salesHTML = salesArray.join("")
    return salesHTML
}

