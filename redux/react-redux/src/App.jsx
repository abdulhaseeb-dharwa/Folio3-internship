import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";

function App() {
  const count = useSelector((state) => state.counter );
  const dispact = useDispatch();
  const increment = () => {
    dispact(actions.increment());
  };
  const decrement = () => {
    dispact(actions.decrement());
  };
  const add = () => {
    dispact(actions.addBy(10));
  }
  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={add}>Add by 10 </button>
      </div>
    </>
  );
}

export default App;
