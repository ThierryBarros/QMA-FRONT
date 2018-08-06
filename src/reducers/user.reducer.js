import { userActionTypes } from '../actions/user-actions.types'; 

const user = (state = {loading: false}, action) => {
    switch (action.type) {
        case userActionTypes.CREATE_USER_REQUEST:
            return {loading: false};
        
        case userActionTypes.CREATE_USER_SUCCESS:
            return  action.userInfo
        
        case userActionTypes.CREATE_USER_FAILURE:
            return { error: action.error }
        
        default:
            return state;
    }
};

export default user;