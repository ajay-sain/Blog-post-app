import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import thunk from "redux-thunk";
import reducer from "./reducers";

const middleware = applyMiddleware(thunk, logger);

const resetReducer = (store = {}, action) =>{
    if(action.type === "CLEAR_STORE") {
        store = undefined
    }
    return reducer(store, action)
}

let store = createStore(resetReducer, middleware);

export default store;