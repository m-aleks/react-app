import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import configureStore from './configureStore';
//import { db } from './db';
import { createStore } from 'redux'
import filmsDb from './ducks/filmsDb'
import {Provider} from 'react-redux'

function Root() {
    const store = createStore(filmsDb);
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
