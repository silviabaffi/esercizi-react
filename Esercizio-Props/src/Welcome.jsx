import Age from "./Age"

function Welcome({name}) {
    return <>
    <p>Welcome <strong>{name}</strong>!</p>
    <Age age={32} />
    </>
}

export default Welcome
