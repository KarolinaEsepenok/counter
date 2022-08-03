import React, {ChangeEvent} from 'react';
import s from "./NewCounter.module.css";

type NewCounterProps={
   // setStop:   (stop:number)=>void
  //  setStart:(start:number)=>void
  //  start: number
    start:number
    stop: number
   // setCount:   (stop:number)=>void
    startButtHandler:(e: ChangeEvent<HTMLInputElement>)=>void
    stopButtHandler:(e: ChangeEvent<HTMLInputElement>)=>void
    onClickButton:()=>void

}
export const NewCounter = (props:NewCounterProps) =>{

  //  const inputOnChangeStartHandler = (e:ChangeEvent<HTMLInputElement>) => {
  //      props.setStart(Number(e.currentTarget.value))
  //  }
 //   const inputOnChangeStopHandler = (e:ChangeEvent<HTMLInputElement>) => {
  //      props.setStop(Number(e.currentTarget.value))
  //  }

   // const onClickButton = () => {
  //      props.setStart(props.start)
  //  }
  //  const incCountHandler = () => {
  //      props.setCount(props.count + 1)
   // }
  //  const resetCountHandler = () => {
   //     props.setCount(props.start)
   // }

    return (
        <div className={s.newCounter}>
            <span>start value:</span>
            <input
                type="number" className={props.start === props.stop ? s.numberDis : '' + s.number}
                value={props.start}
               // onChange={inputOnChangeStartHandler}
                onChange={props.startButtHandler}
            />
            <span>max value:</span>
            <input  type="number"
                    value={props.stop}
                  //  onChange={inputOnChangeStopHandler}
                onChange={props.stopButtHandler}
            />
            <button onClick={props.onClickButton}>Ok</button>
        </div>
    );
}

