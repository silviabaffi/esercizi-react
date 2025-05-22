import "./App.css";
import Color from "./Color";
import Colors from "./Colors";

const favoriteColor = { id: 1, name: "purple" };
const colorArray = [
  { id: 1, name: "purple" },
  { id: 2, name: "pink" },
  { id: 3, name: "blue" },
];

function App() {
  return (
    <>
      <h2>My favorite color is:</h2>
      <Color color={favoriteColor} />
      <h2>My favorite colors are:</h2>
      <Colors colors={colorArray} />
    </>
  );
}

export default App;
