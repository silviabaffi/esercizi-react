import Message from "./Message"
import Age from "./Age"

function Welcome({name, age}) {
    let ageComponent = null;

    if (age > 18 && name === "John") {
    ageComponent = <Age age={age} />;
  } else if (age > 18 && age < 65) {
    ageComponent = <Age age={age} />;
  } else if (age) {
    ageComponent = <Age age={age} />;
  } else if (age > 18) {
    ageComponent = <Age age={age} />;
  }

  return (
    <div>
      <p>Welcome, {name}!</p>
      {ageComponent}
      <Message age={age} />
    </div>
  );
}

export default Welcome