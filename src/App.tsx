import React, {useState} from 'react';
import './App.css';
import s from './App.module.css'
import Counter from "./components/Counter";
import {NewCounter} from "./components/NewCounter";


function App() {
    const [stop, setStop]= useState<number>(5);
    const [start, setStart]= useState<number>(0);
    const [count, setCount] = useState<number>(start);
    console.log(start)
    const incCountHandler = () => {
        setCount(count + 1)
    }
    const resetCountHandler = () => {
        setCount(start)
    }

    return (
        <div className={s.app}>
            <NewCounter setStop={setStop} start={start} setStart={setStart}/>

            <Counter incCountHandler={incCountHandler}
                     resetCountHandler={resetCountHandler}
                     count={count}
                     start={start}
                     stop={stop}
            />
        </div>

    )

}

export default App;

