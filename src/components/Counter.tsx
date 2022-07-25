import React from 'react';
import s from "../App.module.css";
import {Button} from "./Button";



type CounterType = {
    count: number
    incCountHandler: () => void
    resetCountHandler: () => void
    start: number
    stop: number
}
const Counter = (props: CounterType) => {
    return (
        <div className={s.content}>
            <h1 className={props.count === props.stop ? s.numberDis : '' + s.number}>{props.count}</h1>
            <div className={'buttonCont'}>
                <Button callBack={props.incCountHandler} disBtn={props.count >= props.stop} name={'inc'}/>
                <Button callBack={props.resetCountHandler} disBtn={props.count === props.start} name={'reset'}/>
            </div>
        </div>
    );
};

export default Counter;
