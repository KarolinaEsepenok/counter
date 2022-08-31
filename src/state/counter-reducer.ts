

//type InitialState = {
  //  startValue: number
       // ...
//}

const initialState = {
    startValue: 0,
    maxValue: 0,
    myValue: 0,
    message: ''
}
type initialState2 = typeof initialState
export type ActionType = StartButtHandlerAT2 | MaxButtHandlerAT | CounterAT | MessageAT
export const counterReducer = (state: initialState2, action: ActionType):initialState2 => {
    switch (action.type) {
        case 'START-COUNTER': {
            return {...state, startValue: action.value};
        }
        case 'MAX-COUNTER': {
            return {...state, maxValue: action.value};
        }
        case 'COUNT-COUNTER':
            return {...state, myValue: action.value};
        case 'MESSAGE':
            return {...state, message: action.message};

        default:
            throw new Error("I don't understand this action type")
    }

}
export type StartButtHandlerAT2 = {
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
export const startButtHandlerAC = (value:number): StartButtHandlerAT2=>{
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


