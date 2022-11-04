import React, {useEffect} from 'react';
import s from './App.module.css'
import {Counter} from './components/Counter'
import {NewCounter} from "./components/NewCounter";
import { IncValueAC, ResValueAC,
    SetErrorAC, StateType,
} from "./state/valueReducer";
import {useDispatch, useSelector} from "react-redux";
import {ValueRootStateType} from "./state/store";


export function App() {
    const value = useSelector<ValueRootStateType, StateType>(state => state.value);
    const dispatch = useDispatch()
    const IncBtnHandler = () => {
        dispatch(IncValueAC())
    }
    const ResBtnHandler = () => {
        dispatch(ResValueAC())
    }
    useEffect(() => {
            if (value.myValue >= value.maxValue) {
                dispatch(SetErrorAC())
            }
        }, [value.myValue]
    )
    //CLASS
    const disable = value.error || value.startValue === value.maxValue
    const message = value.startValue > value.maxValue ? "Incorrect value!" : `${value.myValue}`
    const errorValueColor = value.error ? {color: 'red'} : {}

//NewCounter


    return (
        <div className={s.app}>
            <NewCounter
            />
            <Counter message={message} disable={disable} errorValueColor={errorValueColor} IncBtnHandler={IncBtnHandler}
                     ResBtnHandler={ResBtnHandler}/>

        </div>);
}


//         <div>
//
//       <BrowserRouter>
//           <div className={s.app}>
//               <Routes>
//                   <Route path={'/'} element={<Navigate to={'/counter'}/>}></Route>
//                   <Route path={'/counter'} element={<Counter/>}/>
//                   <Route path={'/set'} element={<NewCounter/>}/>
//               </Routes></div>
//       </BrowserRouter></div>)


//  const navigate = useNavigate()
//  const SetBtnHandler=()=>{
//       return navigate('/set')
// }