const App = () => {
  const course = "Half Stack application development";
  // the object are now in a table "parts"
  // the components should take them from the table adn render them
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header name={course} />
      <Content name0={parts[0].name} exercises0={parts[0].exercises} />
      <Content name1={parts[1].name} exercises1={parts[1].exercises} />
      <Content name2={parts[2].name} exercises2={parts[2].exercises} />
      <Total
        exercises0={parts[0].exercises}
        exercises1={parts[1].exercises}
        exercises2={parts[2].exercises}
      />
    </div>
  );
};
// jäin tähän, teht 1.4!

function Content(props) {
  console.log(props);
  return (
    <div>
      <p>
        {props.name0} {props.exercises0}
      </p>
      <p>
        {props.name1} {props.exercises1}
      </p>
      <p>
        {props.name2} {props.exercises2}
      </p>
    </div>
  );
}

function Total(props) {
  console.log(props);
  return (
    <div>
      <p>
        Number of exercises:{" "}
        {props.exercises0 + props.exercises1 + props.exercises2}
      </p>
    </div>
  );
}

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default App;
