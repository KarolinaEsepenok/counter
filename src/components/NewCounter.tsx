import React, {useState} from 'react';
import s from "../App.module.css";
type NewCounterProps={
    setStop:   (stop:number)=>void
    setStart:(start:number)=>void
    start: number
}

export const NewCounter = (props:NewCounterProps) => {
    const [start, setStart] = useState<number>(props.start)

    return (
        <div className={s.content}>

            <input
                value={start}
                type="number" onChange={(e)=>setStart(Number(e.currentTarget.value))} />

            <input/>
            <button onClick={()=> {
                props.setStart(start)
            }}>Ok</button>
        </div>
    );
};

