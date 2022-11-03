
import React, {ChangeEvent} from 'react';
import s from "./NewCounter.module.css";
import {Input} from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {ValueRootStateType} from "../state/store";
import {IncMaxValueAC, IncStartValueAC, SetErrorAC, StateType} from "../state/valueReducer";
import {useNavigate} from "react-router-dom";


export const NewCounter = () => {
    const value = useSelector<ValueRootStateType, StateType>((state)=> state.value)
  //  const navigate = useNavigate()
 //   const counterSetBtnHandler=()=>{
 //       navigate('/counter')
 //   }
    const dispatch = useDispatch()
    const incMaxValueBtnHandler=(number:number)=>{
        dispatch(IncMaxValueAC(number))
    }
    const incStartValueBtnHandler=(number:number)=>{
        dispatch(IncStartValueAC(number))
    }
    const setErrorHandler=()=>{
        dispatch(SetErrorAC())
    }

    return (
        <div className={s.newCounter}>
           <div className={s.newCounterSett}>
               <Input title={'MAX VALUE'} onChange={incMaxValueBtnHandler} error={value.error} value={value.maxValue} setError={setErrorHandler}/>
               <Input title={'START VALUE'} onChange={incStartValueBtnHandler} error={value.error} value={value.startValue} setError={setErrorHandler}/>
           </div>
            <div className={s.newCounterButt}>
                <button className={s.btnCounter} >SET</button>
            </div>
        </div>
    );
}

