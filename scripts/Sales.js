export const Sales = async () => {
    const response = await fetch("http://localhost:8088/purchases")
    const sales = await response.json()
    console.log(sales)
    // let salesDivs = sales.map()

    // salesDivs = salesDivs.join("")

    // return salesDivs
}

