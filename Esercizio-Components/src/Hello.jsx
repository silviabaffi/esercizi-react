import Message from "./Message"

function Hello() {
    return (<>
        <h2>Hello, World!</h2>
        {Message()}
        </>
    )
}

export default Hello