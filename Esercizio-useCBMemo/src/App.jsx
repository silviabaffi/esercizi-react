import "./App.css";
import Counter from "./Counter";
import FilteredList from "./FilteredList";

function App() {
  const users = [
    {
      id: 1,
      name: "Silvia",
      age: 32,
    },
    {
      id: 2,
      name: "Buffy",
      age: 22,
    },
    {
      id: 3,
      name: "Willow",
      age: 13,
    },
    {
      id: 4,
      name: "Xander",
      age: 47,
    },
    {
      id: 5,
      name: "Tara",
      age: 12,
    },
    {
      id: 6,
      name: "Rupert",
      age: 60,
    },
  ];

  return (
    <>
      <Counter />
      <hr />
      <FilteredList list={users} />
    </>
  );
}

export default App;
