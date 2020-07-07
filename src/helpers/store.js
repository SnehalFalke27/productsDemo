import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const myMiddleware = store => {
    return next => {
        return action => {
            const result = next(action);
            return result;
        }
    }
}

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        myMiddleware
    )
);