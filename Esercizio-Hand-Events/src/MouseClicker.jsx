function MouseClicker() {
    function printName(e) {
        console.log(e.target.name)
    }

    function printImg() {
        const img = document.querySelector("img")
        console.log(img.src)
    }

    return (
    <>
        <button onClick={printName} name="one">Stampa il nome</button>
        <button onClick={printImg} name="two"><img src="https://images.unsplash.com/photo-1598014717651-21a0ac27b7ce?q=80&w=3111&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></button>
    </>)
}

export default MouseClicker
