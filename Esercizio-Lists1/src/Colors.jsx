function Colors() {
  const colors = [
    {
      id: 1,
      name: "purple",
    },
    {
      id: 2,
      name: "pink",
    },
    {
      id: 3,
      name: "blue",
    },
  ];

  return (
    <>
      <h3>My favorite colors are:</h3>
      <ul>
        {colors.map((c, i) => (
          <li key={`firstColorGroup-${i}`}>{c.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Colors;
