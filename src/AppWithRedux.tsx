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
        // setCount(start)
        //  setMessage('')
        //   localStorage.setItem('start',JSON.stringify(start))
        //   localStorage.setItem('stop',JSON.stringify(stop))
    // useEffect(()=>{
    //    localStorage.setItem('start',JSON.stringify(setStart))

    // },[start])
    //useEffect(()=>{
    //     localStorage.setItem('stop',JSON.stringify(stop))
    // },[stop])

    //  useEffect(()=>{
    //     localStorage.getItem('count')
    //  },[])
    function startButtHandler (value: number) {
        const action = startButtHandlerAC(value);
        dispatch(action)
        //  const value = Number(e.currentTarget.value)
        //  setStart(value)

        //  if (value < 0 || value >= stop) {
        //      setMessage('Incorrect value!')
        //  } else setMessage('Enter values and press set')
    }
    function stopButtHandler  (value: number) {
        const action = maxButtHandlerAC(value);
        dispatch(action)

        //  const value = Number(e.currentTarget.value)
        //   setStop(value)

        //  if (value < 0 || value >= stop) {
        //      setMessage('Incorrect value!')
        //  } else setMessage('Enter values and press set')
    }
    function count  (value: number)  {
        const action = counterAC(value);
        dispatch(action)
    }
    function message (message: string) {
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
            <NewCounter

            />
            <Counter stop={}


            />
        </div>
    )
}