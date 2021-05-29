import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger'
import reducer from './reducers';
import App from './containers/App';

const logger1 = (store) => (next) => (action) => {
    /* console.log(`11111111111111111111111111`)
    console.log(next) */
    console.log('log1', typeof action,action.type === 'REQUEST_POSTS');
    return next(action);
};

function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => next => action => {
        if (typeof action === 'function') {
            // dispatch 是中间件增强后的
            return action(dispatch, getState, extraArgument);
        }

        return next(action);
    };
}

const thunk = createThunkMiddleware();


const logger2 = (store) => (next) => (action) => {
    /* console.log(`22222222222222222`)
    console.log(next) */
    console.log('log2', typeof action,action.type === 'REQUEST_POSTS');
    return next(action);
};

const middleware = [logger1, thunk, logger2];

/* if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
} */

const store = createStore(reducer, applyMiddleware(...middleware));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
