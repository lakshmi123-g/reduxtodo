import { combineReducers } from "redux";

import todosReducer from "./reducers";


const rootReducer = combineReducers({
    todos: todosReducer,
})

export default rootReducer