export type StateType = {
    maxValue: number,
    startValue: number,
    myValue: number,
    error: boolean
}
export type IncMaxValueAT = {
    type: 'INC-MAX-VALUE',
    value: number
}
export type IncStartValueAT = {
    type: 'INC-START_VALUE'
    value: number

}
export type IncValueAT = {
    type: 'INC-VALUE'
}
export type SetErrorAT = {
    type: 'SET-ERROR'
}
export type ResValueAT = {
    type: 'RES-VALUE'
}
const initialValue: StateType = {
    startValue: 0,
    maxValue: 0,
    myValue: 0,
    error: false
}
export type ActionType = IncMaxValueAT | IncStartValueAT | IncValueAT | SetErrorAT | ResValueAT
export const valueReducer = (state: StateType = initialValue, action: ActionType): StateType => {
    switch (action.type) {
        case 'INC-MAX-VALUE': {
            return {...state, maxValue: action.value};
        }
        case 'INC-START_VALUE': {
            return {...state, startValue: action.value, myValue: action.value};
        }
        case 'INC-VALUE': {
            if (state.myValue >= state.maxValue) {
                return {...state, error: true}
            } else {
                return {...state, myValue: state.myValue + 1}
            }
        }
        case 'SET-ERROR': {
            if (state.startValue > state.maxValue || (state.startValue || state.maxValue) < 0 || state.myValue >= state.maxValue) {
                return {...state, error: true}
            } else {
                return {...state, error: false}
            }
        }
        case 'RES-VALUE':
            return {...state, error: false, myValue: state.startValue};
        default:
            return state
    }
}
export const IncMaxValueAC = (value: number): IncMaxValueAT => {
    return {type: 'INC-MAX-VALUE', value}
}
export const IncStartValueAC = (value: number): IncStartValueAT => {
    return {type: 'INC-START_VALUE',value}
}
export const IncValueAC = (): IncValueAT => {
    return {type: 'INC-VALUE'}
}
export const SetErrorAC = (): SetErrorAT => {
    return {type: 'SET-ERROR'}
}
export const ResValueAC = (): ResValueAT => {
    return {type: 'RES-VALUE'}
}



