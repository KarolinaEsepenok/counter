export type StateType = {
    startValue: number,
    maxValue: number,
    myValue: number,
    error: boolean
}
export type IncMaxValueAT = {
    type: 'INC-MAX-VALUE',
    payload:{
        value:number
    }
}
export type IncStartValueAT = {
    type: 'INC-START_VALUE'
    payload:{
        value:number
    }
}
export type IncValueAT = {
    type: 'INC-VALUE'

}
export type setErrorAT = {
    type: 'SET-ERROR'
}
export type ResValueAT = {
    type: 'RES-VALUE'
}
const initialValue:StateType = {
    startValue: 0,
    maxValue: 0,
    myValue: 0,
    error: false
}
export type ActionType = IncMaxValueAT |IncStartValueAT | IncValueAT | setErrorAT |ResValueAT
export const valueReducer = (state: StateType = initialValue, action: ActionType):StateType => {
    switch (action.type) {
        case 'INC-MAX-VALUE': {
            return {...state, startValue: action.valueStart};
        }
        case 'INC-START_VALUE': {
            return {...state, maxValue: action.valueMax};
        }
        case 'INC-VALUE':
            return {...state, myValue: action.value+1};
        case 'SET-ERROR':
            return {...state, message: action.message};
        case 'RES-VALUE':
            return {...state, message: action.message};
        default:
            throw new Error("I don't understand this action type")
    }

}

export const startButtHandlerAC = (valueStart:number): StartButtHandlerAT=>{
    return { type: 'START-COUNTER', valueStart}
}
    export const maxButtHandlerAC = (valueMax:number): MaxButtHandlerAT=>{
        return { type: 'MAX-COUNTER', valueMax}
    }
    export const counterAC = (value:number): CounterAT=>{
        return { type: 'COUNT-COUNTER', value}
    }
    export const messageAC = (message:string): MessageAT=>{
        return { type: 'MESSAGE', message}
    }


