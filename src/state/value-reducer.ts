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
            return {...state, maxValue: action.payload.value};
        }
        case 'INC-START_VALUE': {
            return {...state, startValue: action.payload.value, myValue:action.payload.value};
        }
        case 'INC-VALUE': {
            if (state.myValue >= state.maxValue) {
                return {...state, error:true}
            }else {
                return {...state, myValue:state.myValue +1}
            }
        }
        case 'SET-ERROR':
            return {...state, message: action.message};
        case 'RES-VALUE':
            return {...state, message: action.message};
        default:
            throw new Error("I don't understand this action type")
    }

}

export const IncMaxValueAC = (value:number): IncMaxValueAT=>{
    return { type: 'INC-MAX-VALUE',payload:{ value}}
}
    export const IncStartValueAC = (value:number): IncStartValueAT=>{
        return { type: 'INC-START_VALUE',payload:{ value}}
    }
    export const IncValueAC = (): IncValueAT=>{
        return { type: 'INC-VALUE'}
    }
    export const setErrorAC = (): setErrorAT=>{
        return { type: 'SET-ERROR'}
    }
export const ResValueAC = (): ResValueAT=>{
    return { type: 'RES-VALUE'}
}


