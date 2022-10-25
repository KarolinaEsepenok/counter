import React, { useState} from 'react';

import s from './App.module.css'
import Counter from "./components/Counter";
import {NewCounter} from "./components/NewCounter";
import {counterAC, initialState, maxButtHandlerAC, messageAC, startButtHandlerAC} from "./state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {CountRootStateType} from "./state/store";

export function AppWithRedux() {
    const counter = useSelector<CountRootStateType, initialState>(state => state.counter);
    const dispatch = useDispatch();
    const onClickButton = () => {}

    function startButtHandler (value: number) {
        const action = startButtHandlerAC(value);
        dispatch(action)
    }
    function stopButtHandler  (value: number) {
        const action = maxButtHandlerAC(value);
        dispatch(action)
    }
    function countHandler  (value: number)  {
        const action = counterAC(value);
        dispatch(action)
    }
    function messageHandler (message: string) {
        const action = messageAC(message);
        dispatch(action)
    }
    // const incCountHandler = () => {
    //      setCount(count + 1)
    //  localStorage.setItem('count',JSON.stringify(count+1))
    //}
    //  const resetCountHandler = () => {
    //      setCount(start)
    //  }

    return (
        <div className={s.app}>
            <NewCounter startButtHandler={startButtHandler} stopButtHandler={stopButtHandler} countHandler={countHandler} messageHandler={messageHandler}
               start={props.start}   stop={props.stop} onClickButton={onClickButton}
            />
            <Counter startButtHandler={startButtHandler} stopButtHandler={stopButtHandler} countHandler={countHandler} messageHandler={messageHandler} start={props.start}
                     stop={props.stop} count={props.count} message={props.message}


            />
            <div></div>
        </div>
    )
}