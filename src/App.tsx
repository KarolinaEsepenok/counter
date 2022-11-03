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


export function App() {
    return (
      <BrowserRouter>
          <div className={s.app}>
              <Routes>
                  <Route path={'/'} element={<Navigate to={'/counter'}/>}></Route>
                  <Route path={'/counter'} element={<Counter/>}/>
                  <Route path={'/set'} element={<NewCounter/>}/>
              </Routes></div>
      </BrowserRouter>);
}

//element={<Navigate to={'/counter'}/>}