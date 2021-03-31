import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


export const authMe = () => async (dispatch) => {
    let response = await authAPI.authMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
return 'it-incubator.by';
}

export const login = (email, password, rememberMy) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMy)
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => (
    {type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export default authReducer;