const CounterStateType = {
    startValue: 0,
    maxValue: 0,
    myValue: 0,
    message: ''
}
export type StartButtHandlerAT = {
    type: 'START-COUNTER'
    valueStart: number
}
export type MaxButtHandlerAT = {
    type: 'MAX-COUNTER'
    valueMax: number
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
            return {...state, startValue: action.valueStart};
        }
        case 'MAX-COUNTER': {
            return {...state, maxValue: action.valueMax};
        }
        case 'COUNT-COUNTER':
            return {...state, myValue: action.value+1};
        case 'MESSAGE':
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


