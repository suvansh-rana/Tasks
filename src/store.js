import { createStore, applyMiddleware } from "redux";
import todoReducer from "./reducers/todoReducer";
// import logger from "redux-logger";
import getPreviousTodos from "./helpers/getPreviousTodos";


export default createStore(
    todoReducer,
    getPreviousTodos(),
    // applyMiddleware(logger)
);