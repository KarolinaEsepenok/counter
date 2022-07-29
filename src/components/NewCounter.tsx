import React, {ChangeEvent, useState} from 'react';
import s from "./NewCounter.module.css";
type NewCounterProps={
    setStop:   (stop:number)=>void
    setStart:(start:number)=>void
    start: number
}

export const NewCounter = (props:NewCounterProps) => {
    const [start, setStart] = useState<number>(props.start)
const inputOnClickHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setStart(Number(e.currentTarget.value))
}
const onClickButton = () => {
    props.setStart(start)
}
    return (
        <div className={s.newCounter}>

            <input
                value={start}
                type="number" onChange={inputOnClickHandler} />

            <input type="number"/>
            <button onClick={onClickButton}>Ok</button>
        </div>
    );
};

