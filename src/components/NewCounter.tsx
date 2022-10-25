import React, {ChangeEvent} from 'react';
import s from "./NewCounter.module.css";
import {Button} from "./Button";

type NewCounterProps = {
    // setStop:   (stop:number)=>void
    //  setStart:(start:number)=>void
    //  start: number
    start: number
    stop: number
    // setCount:   (stop:number)=>void
    // startButtHandler:(e: ChangeEvent<HTMLInputElement>)=>void
    // stopButtHandler:(e: ChangeEvent<HTMLInputElement>)=>void
    onClickButton: () => void
}
export const NewCounter = (props: NewCounterProps) => {
    return (
        <div className={s.newCounter}>
            <span>start value:</span>
            <input
                type="number" className={props.start < 0 ? s.numberDis : '' + s.number}
                value={props.start}
                // onChange={props.startButtHandler}
            />
            <span>max value:</span>
            <input type="number"
                   className={props.stop < 0 || props.stop === props.start - 1 ? s.numberDis : '' + s.number}
                   value={props.stop}
                // onChange={props.stopButtHandler}
            />
            <Button name={'Set'} callBack={props.onClickButton} disBtn={props.start === props.stop}/>

        </div>
    );
}

