import axios from 'axios';
import baseURL from '../config';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({type: 'USER_LOGIN_REQUEST'});

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { data } = await axios.post(`${baseURL}/auth/login`, {email, password}, config);

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data
        });

        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({type: 'USER_LOGOUT'});
};

export const register = (name, email, password, passConfirm, img, location, occupation, about) => async (dispatch) => {
    try {
        dispatch({type: 'USER_REGISTER_REQUEST'});

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { data } = await axios.post(`${baseURL}/auth/register`, {name, email, password, passConfirm, img, location, occupation, about}, config);

        dispatch({
            type: 'USER_REGISTER_SUCCESS',
            payload: data
        });

    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAIL',
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};
