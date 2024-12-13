// change handler

// component function
export const generateEntreeHTML = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    const entreesArray = entrees.map((entree) => {
        return `<div>
        <input type="radio" name="entreeoption" value="${entree.id}"/> ${entree.name}
        </div>
        `
    })

    let entreesHTML = entreesArray.join("")

    return entreesHTML
}