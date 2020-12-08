import { createStore,applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducers.js";

const store = createStore(rootReducer);


export default store
