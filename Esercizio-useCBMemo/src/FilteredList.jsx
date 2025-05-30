import { useMemo } from "react";

function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((s) => s.age >= 18);
  }, [list]);

  return (
    <>
      <h3>Students:</h3>
      <ul>
        {filteredList.map((s) => {
          return (
            <li key={s.id}>
              <strong>Name: </strong>
              {s.name} | <strong>Age: </strong> {s.age}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FilteredList;
