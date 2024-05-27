const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content part={course.parts[0]} />
      <Content part={course.parts[1]} />
      <Content part={course.parts[2]} />
      <Total
        exercises0={course.parts[0].exercises}
        exercises1={course.parts[1].exercises}
        exercises2={course.parts[2].exercises}
      />
    </div>
  );
};

function Content({ part }) {
  return (
    <div>
      <p>
        {part.name} {part.exercises}
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
