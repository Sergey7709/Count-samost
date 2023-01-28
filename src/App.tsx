import "./App.css";
import {useState} from "react";
import Button from "./components/button";
import Count from "./components/count";

function App() {
    const [count, setCount] = useState(0);
    let stopCount = 5
    const incHandlerButton = () => {
        count < stopCount && setCount((count) => count + 1)
    }
    const resHandlerButton = () => {
        setCount(0)

    }
    const getDisable = (count >= stopCount && true)

    return <div className="App">
        <span>Counter</span>
        <Count count={count} stopCount={stopCount}/>
        <Button getDisable={getDisable} callbackCount={incHandlerButton}> Incr </Button>
        <Button callbackCount={resHandlerButton} stopCount={stopCount}> Reset </Button>
    </div>;
}

export default App;
