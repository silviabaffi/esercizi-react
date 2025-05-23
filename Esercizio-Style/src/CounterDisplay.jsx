function CounterDisplay({ handleCount }) {
  return (
    <h3
      style={{
        fontSize: "20px",
        color: "rebeccapurple",
      }}
    >
      Counter currently set to {handleCount}
    </h3>
  );
}

export default CounterDisplay;
