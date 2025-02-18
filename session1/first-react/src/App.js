import React from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassComponent />
        <GreetComponent />
        {element}
      </header>
    </div>
  );
}
class ClassComponent extends React.Component {
  render() {
    return (
      <>
        <h1>Hello, I am Class component ;</h1>
      </>
    );
  }
}
function GreetComponent() {
  return <h1>Hello, I am Functional component !;</h1>;
}

const element = <h1>Hello, World!;</h1>;
export default App;





