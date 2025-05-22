function Color() {
    const color = {id: 1, name: "purple"}
    
    return (
        <>
            <h3>My favorite color is:</h3>
            <li>{color.name}</li>
        </>
    )
}

export default Color