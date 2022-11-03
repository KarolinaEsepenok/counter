
import React, {ChangeEvent} from 'react';
import s from "./NewCounter.module.css";
import {Input} from "./Input";

type NewCounterProps = {

}
export const NewCounter = () => {
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
            <Input name={'Set'} callBack={props.onClickButton} disBtn={props.start === props.stop}/>

        </div>
    );
}

