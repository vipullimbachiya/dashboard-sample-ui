import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import sidebarReducer from '../Reducers/sidebarReducer';
import appHeaderReducer from '../Reducers/appHeaderReducer';
import pageHeaderReducer from '../Reducers/pageHeaderReducer';
import uiReducer from '../Reducers/uiReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  combineReducers({
    sidebar: sidebarReducer,
    appHeader: appHeaderReducer,
    pageHeader: pageHeaderReducer,
    ui: uiReducer,
  }),
  undefined,
  composeEnhancers(applyMiddleware(ReduxThunk)),
);

export default Store;
