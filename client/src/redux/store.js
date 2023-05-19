import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { 
    userLoginReducer,
    userRegisterReducer,
} from './reducers/userReducers';


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
});

const userAccountStorage = localStorage.getItem('userAccount') ? JSON.parse(localStorage.getItem('userAccount')) : null;

const initialState = {
    userLogin: { userAccount: userAccountStorage }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;