import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import persistedReducer from './rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)));

export default rootStore;
