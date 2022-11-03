import {combineReducers, createStore} from "redux";
import {valueReducer} from "./value-reducer";

export const rootReducer = combineReducers({
    value: valueReducer,
})
// непосредственно создаём store
export const store = createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type ValueRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
