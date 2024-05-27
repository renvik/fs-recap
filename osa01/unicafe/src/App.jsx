import { useState } from "react";

const App = () => {
  // tallenna napit omaan tilaansa (state hook)
  // käytännössä kutsutaan funktiota useState:
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    console.log("clicked the good button");
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    console.log("clicked the neutral button");
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    console.log("clicked the bad button");
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Statistics = (props) => {
  console.log("statistics saa propsit: ", props);
  const total = props.good + props.neutral + props.bad;
  console.log("kaikki yhteensä: ", total);
  const average = total / 3;
  const positive = (props.good / total) * 100;

  if (total > 0) {
    return (
      <div>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all: {total}</p>
        <p>average: {average} </p>
        <p>positive: {positive} % </p>
      </div>
    );
  } else {
    return null;
  }
};

export default App;
