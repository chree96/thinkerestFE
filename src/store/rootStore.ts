import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const composeApp = composeWithDevTools
  ? composeWithDevTools({
      maxAge: 20,
    })
  : compose;

const configureStore = () =>
  createStore(rootReducer, composeApp(applyMiddleware(thunk)));

export default configureStore;
