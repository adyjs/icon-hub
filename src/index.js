import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom';
import {createStore , combineReducers , applyMiddleware , compose} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';

// reducers
import drawerReducer from './store/reducers/drawer.reducer.js';
import searchReducer from './store/reducers/search.reducer.js';
import statusReducer from './store/reducers/status.reducer.js';

// rootSaga
import rootSaga from './store/sagas/root.saga.js';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    drawerReducer,
    searchReducer,
    statusReducer
})

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
