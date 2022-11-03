import React from 'react';
import s from "../App.module.css";
import {Input} from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {ValueRootStateType} from "../state/store";
import {initialState} from "../state/value-reducer";


const Counter = () => {
    const value = useSelector<ValueRootStateType, initialState>(state => state.value);
    const dispatch=useDispatch()
    const navigate = useNavigate()
   const setBtnHandler=()=>{
        return navigate('/set')
   }
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
