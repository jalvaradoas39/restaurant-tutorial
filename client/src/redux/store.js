import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadingReducer from './reducers/loadingReducers';
import messageReducer from './reducers/messageReducers';
import categoryReducer from './reducers/categoryReducers';
import productReducer from './reducers/productReducers';
import filterReducer from './reducers/filterReducers';
import cartReducer from './reducers/cartReducers';

const reducer = combineReducers({
	loading: loadingReducer,
	messages: messageReducer,
	categories: categoryReducer,
	products: productReducer,
	filters: filterReducer,
	cart: cartReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
