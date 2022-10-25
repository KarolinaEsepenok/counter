import React from "react";
const CounterStateType = {
    startValue: 0,
    maxValue: 0,
    myValue: 0,
    message: ''
}
export type StartButtHandlerAT = {
    type: 'START-COUNTER'
    value: number
}
export type MaxButtHandlerAT = {
    type: 'MAX-COUNTER'
    value: number
}
export type CounterAT = {
    type: 'COUNT-COUNTER'
    value: number
}
export type MessageAT = {
    type: 'MESSAGE'
    message:string
}
export type initialState = typeof CounterStateType
export type ActionType = StartButtHandlerAT | MaxButtHandlerAT | CounterAT | MessageAT
export const counterReducer = (state: initialState, action: ActionType):initialState => {
    switch (action.type) {
        case 'START-COUNTER': {
            return {...state, startValue: action.value};
        }
        case 'MAX-COUNTER': {
            return {...state, maxValue: action.value};
        }
        case 'COUNT-COUNTER':
            return {...state, myValue: action.value+1};
        case 'MESSAGE':
            return {...state, message: action.message};

        default:
            throw new Error("I don't understand this action type")
    }

}

export const startButtHandlerAC = (value:number): StartButtHandlerAT=>{
    return { type: 'START-COUNTER', value}
}
    export const maxButtHandlerAC = (value:number): MaxButtHandlerAT=>{
        return { type: 'MAX-COUNTER', value}
    }
    export const counterAC = (value:number): CounterAT=>{
        return { type: 'COUNT-COUNTER', value}
    }
    export const messageAC = (message:string): MessageAT=>{
        return { type: 'MESSAGE', message}
    }


