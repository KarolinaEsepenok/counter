import React, {useEffect} from 'react';
import s from "./Counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {ValueRootStateType} from "../state/store";
import {useNavigate} from "react-router-dom";
import { IncValueAC, ResValueAC, SetErrorAC, StateType} from "../state/valueReducer";


export const Counter = () => {
    const value = useSelector<ValueRootStateType, StateType>(state => state.value);
    const dispatch=useDispatch()
  //  const navigate = useNavigate()
 //  const SetBtnHandler=()=>{
 //       return navigate('/set')
  // }
   const IncBtnHandler=()=>{
        dispatch(IncValueAC())
   }
    const ResBtnHandler=()=>{
        dispatch(ResValueAC())
    }
    useEffect(()=>{
        if(value.myValue >= value.maxValue){
            dispatch(SetErrorAC())
        }},[value.myValue]
    )
    //CLASS
    const disable= value.error || value.startValue === value.maxValue
    const message = value.startValue > value.maxValue ? "Incorrect values!" : `${value.myValue}`
      const errorValueColor = value.error ? {color: 'red'} : {}

    return (
        <div className={s.content}>
            <div className={s.counter}>
                <span className={s.number} style={errorValueColor}>{message}</span>
            </div>
            <div>
            <button onClick={IncBtnHandler} disabled={disable} className={s.btnCounter}>INC</button>
            <button onClick={ResBtnHandler} className={s.btnCounter}>RES</button>
            <button   className={s.btnCounter}>SET</button></div>
        </div>
)
}

