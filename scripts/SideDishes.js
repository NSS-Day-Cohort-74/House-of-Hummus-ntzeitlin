export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    const sidesArray = sides.map((side) => {
        return `<div>
        <input type="radio" name="sideoption" value="${side.id}"/> ${side.title}
        </div>
        `
    })

    let sidesHTML = sidesArray.join("")

    return sidesHTML
}

