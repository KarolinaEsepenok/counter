import React, {ChangeEvent, useState} from 'react';
import './App.css';
import s from './App.module.css'
import Counter from "./components/Counter";
import {NewCounter} from "./components/NewCounter";


function App() {
    const [stop, setStop] = useState<number>(5);
    const [start, setStart] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const [message, setMessage] = useState<string>('');
    const onClickButton = () => {
        setCount(start)
        setMessage('')
    }
    const startButtHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        setStart(value)
        if (value < 0 || value >= stop) {
            setMessage('Incorrect value!')
        } else setMessage('Enter values and press set')
    }
    const stopButtHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        setStop(value)
        if (value < 0 || value >= stop) {
            setMessage('Incorrect value!')
        } else setMessage('Enter values and press set')
    }
    const incCountHandler = () => {
        setCount(count + 1)
    }
    const resetCountHandler = () => {
        setCount(start)
    }

    return (
        <div className={s.app}>
            <NewCounter
                onClickButton={onClickButton}
                startButtHandler={startButtHandler}
                stopButtHandler={stopButtHandler}
                start={start}
                stop={stop}
            />
            <Counter setCount={setCount}
                     count={count}
                     start={start}
                     stop={stop}
                     message={message}
                     incCountHandler={incCountHandler}
                     resetCountHandler={resetCountHandler}


            />
        </div>
    )
}

export default App;

