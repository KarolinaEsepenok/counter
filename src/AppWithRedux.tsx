import React from 'react';
import s from './App.module.css'
import Counter from "./components/Counter";
import {NewCounter} from "./components/NewCounter";
import {BrowserRouter, Navigate, Route,  Routes,} from "react-router-dom";
import {IncValueAC,IncMaxValueAC,IncStartValueAC,ResValueAC,setErrorAC} from "./state/value-reducer";

export function AppWithRedux() {
    return (
      <BrowserRouter>
          <div className={s.app}>
              <Routes>
                  <Route path={'/'} element={<Navigate to={'/counter'}/>}></Route>
                  <Route path={'/counter'} element={<Counter/>}></Route>
                  <Route path={'/set'} element={<NewCounter/>}/>

              </Routes>
          </div>
      </BrowserRouter>);
}