import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
// import {createEpicMiddleware} from 'redux-observable';
import {composeWithDevTools} from 'redux-devtools-extension';
// import {rootEpic} from './rootEpic';

// const epicMiddleware = createEpicMiddleware();
const composeApp = composeWithDevTools
  ? composeWithDevTools({
      maxAge: 20,
    })
  : compose;

const configureStore = () =>
  createStore(rootReducer, composeApp(applyMiddleware(thunk)));

// const store = configureStore();

// epicMiddleware.run(rootEpic);

// export default store;
export default configureStore;
