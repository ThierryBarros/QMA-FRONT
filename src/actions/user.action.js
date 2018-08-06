import { userActionTypes } from './user-actions.types';
import { loginActionTypes } from './login-actions.types';
import UserProvider from '../providers/user.provider';
import AuthProvider from '../providers/auth.provider';

export const createUser = (userInfo) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const request = (userInfo) => ({ type: userActionTypes.CREATE_USER_REQUEST, userInfo});
            const success = (userInfo) => ({ type: userActionTypes.CREATE_USER_SUCCESS, userInfo});
            const failure = (error) => ({ type: userActionTypes.CREATE_USER_FAILURE, error });
    
            dispatch(request(userInfo));
    
            UserProvider.create(userInfo).then(
                user => resolve(dispatch(success(user.data)))
            ).catch(
                error => reject(dispatch(failure(error)))
            );
        });
    };
}; 

export const login = (userCredentials) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const request = (userCredentials) => ({ type: loginActionTypes.LOGIN_REQUEST, userCredentials});
            const success = (userCredentials) => ({ type: loginActionTypes.LOGIN_SUCCESS, userCredentials});
            const failure = (error) => ({ type: loginActionTypes.LOGIN_FAILURE, error });

            dispatch(request(userCredentials));

            AuthProvider.login(userCredentials).then(
                res => {
                    sessionStorage.setItem('token', res.data.credentials);
                    resolve(dispatch(success(res.data.user)));
                }
            ).catch(
                error => reject(dispatch(failure(error)))
            );
        });
    };
};