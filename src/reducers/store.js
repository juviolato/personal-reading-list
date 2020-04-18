import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './index';

const enhancers = compose(applyMiddleware(thunk));
const store = createStore(RootReducer, enhancers);

export default store;