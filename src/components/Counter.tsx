

import React from 'react';
import s from "../App.module.css";
import {Input} from "./Input";
type CounterType = {
   count:number
   start: number
    stop: number

    countHandler:(value:number)=>void
   startButtHandler:(value:number)=>void
    stopButtHandler:(value:number)=>void
    messageHandler:(message:string)=>void

}
const Counter = (props: CounterType) => {

    return (
        <div className={s.content}>
            <h1 className={props.message === 'Incorrect values!' ? s.numberDis : '' + s.number}>{props.message ? props.message : props.count}</h1>
            <div className={'buttonCont'}>
                <Input callBack={props.startButtHandler} disBtn={!!props.message || props.count === props.stop}
                       name={'inc'}/>
                <Input callBack={props.stopButtHandler} disBtn={!!props.message || props.count === props.start}
                       name={'reset'}/>
            </div>
        </div>);

}
export default Counter;
    {/*<div className={s.content}>
            <h1 className={props.message === 'Incorrect values!' ? s.numberDis : '' + s.number}>{props.message ? props.message : props.count}</h1>
            <div className={'buttonCont'}>
                <Input callBack={props.incCountHandler} disBtn={!!props.message || props.count === props.stop} name={'inc'}/>
                <Input callBack={props.resetCountHandler} disBtn={!!props.message || props.count === props.start} name={'reset'}/>
            </div>
        </div>
*/}
