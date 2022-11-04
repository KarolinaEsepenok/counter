import React from 'react';
import s from "./Counter.module.css";


export  type CounterPropsType={
    errorValueColor?:any
    message:string
    IncBtnHandler:()=>void
    ResBtnHandler:()=>void
    disable: boolean
}
export const Counter = (props:CounterPropsType) => {
    return (
        <div className={s.content}>
            <div className={s.counter}>
                <div className={props.errorValueColor} >{props.message}</div>
            </div>
            <div>
            <button onClick={props.IncBtnHandler} disabled={props.disable} className={s.btnCounter}>INC</button>
            <button onClick={props.ResBtnHandler} className={s.btnCounter}>RES</button>
            <button   className={s.btnCounter}>SET</button></div>
        </div>
)
}

