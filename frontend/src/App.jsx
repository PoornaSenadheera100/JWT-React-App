import "./App.css";

function App() {
  function dataLoad() {
    alert("Working");
  }

  return (
    <>
      <button onClick={dataLoad}>Load</button>
    </>
  );
}

export default App;
