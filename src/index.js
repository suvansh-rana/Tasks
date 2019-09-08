import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from "react-redux";
import TodoContainer from "./components/TodoContainer";
import "./css/index.css";

ReactDOM.render(
    <Provider store={store}>
        <TodoContainer />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
