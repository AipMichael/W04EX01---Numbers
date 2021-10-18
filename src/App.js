import "./App.css";
import NumberedBox from "./Components/NumberedBox";

function App() {
  const myArray = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="App">
        {
          <div className="container">
            {myArray.map((element) => (
              <NumberedBox key={element} number={element} />
            ))}
          </div>
        }
      </div>
    </>
  );
}

export default App;
