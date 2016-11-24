import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { throttle } from 'lodash/throttle';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './rootReducer';




const loadState = () => {
  try {
    const seriallizedState = localStorage.getItem('hackafy');
    if (seriallizedState === null) {
      return undefined;
    }
    return JSON.parse(seriallizedState);
  } catch (err) {
      console.log('Error occurred while loading state from Local Storage');
      return undefined;
    }
}

const saveState = (state) => {
  try {
    const seriallizedState = JSON.stringify(state);
    localStorage.setItem('hackafy', seriallizedState);
    return JSON.parse(seriallizedState);
  } catch (err) {
      console.log('Error occurred while persisting state to Local Storage');
      return undefined;
    }
}


const configureStore = (initialState = {}) => {
  let middleware = applyMiddleware(thunk, routerMiddleware(browserHistory));

  if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
    const devtools = window.devToolsExtension();
    middleware = compose(middleware, devtools);
  }

  const persistedState = loadState();
  const store = createStore(rootReducer, {...persistedState, ...initialState}, middleware);

  store.subscribe(throttle(() => {
    const state = store.getState();
    const stateToPersist = {
      currentUser: state.currentUser,
    };
    saveState(stateToPersist);
  }, 1000));
  return store;
};

export default configureStore;
