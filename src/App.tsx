import React from 'react';
import s from './App.module.css'
import {Counter} from '../src/components/Counter'
import {NewCounter} from "./components/NewCounter";
import {BrowserRouter, Navigate, Route, Routes,} from "react-router-dom";
import {
    IncMaxValueAC,
    IncStartValueAC, IncValueAC, ResValueAC,
    SetErrorAC,
    valueReducer
} from "./state/value-reducer";


export const App=()=> {
    return (
        <div>
            <Counter/>
            <NewCounter/>
      </div>);
}

//element={<Navigate to={'/counter'}/>}
//(
//         <div>
//             <Counter/>
//       <BrowserRouter>
//           <div className={s.app}>
//               <Routes>
//                   <Route path={'/'} element={<Navigate to={'/counter'}/>}></Route>
//                   <Route path={'/counter'} element={<Counter/>}/>
//                   <Route path={'/set'} element={<NewCounter/>}/>
//               </Routes></div>
//       </BrowserRouter></div>)