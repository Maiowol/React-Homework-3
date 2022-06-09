import {createStore, combineReducers, applyMiddleware, compose  } from "redux";

import magazine from "./modules/magazine";

//Reducer 모음
const rootReducer = combineReducers({magazine});

const store = createStore(rootReducer);

export default store;

