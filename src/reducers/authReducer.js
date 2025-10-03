const initialState = {
    user: null,
    isAdmin: false,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload.user, // user is now serializable
                isAdmin: action.payload.isAdmin,
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}
