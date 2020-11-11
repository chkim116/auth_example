export const SIGN_UP_REQUEST = "user/SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "user/SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "user/SIGN_UP_FAILURE";

export const SIGN_IN_REQUEST = "user/SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "user/SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "user/SIGN_IN_FAILURE";

export const LOGOUT_REQUEST = "user/LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "user/LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "user/LOGOUT_FAILURE";

const initialState = {
    isLogin: false,
    isLoading: false,
    error: "",
    userData: {
        email: "",
    },
};

export const signUpRequest = (signUpData) => ({
    type: SIGN_UP_REQUEST,
    payload: signUpData,
});

export const signInRequest = (signInData) => ({
    type: SIGN_IN_REQUEST,
    payload: signInData,
});

export const logOut = () => ({
    type: LOGOUT_REQUEST,
});

function user(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case SIGN_UP_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case SIGN_UP_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };

        case SIGN_IN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isLogin: false,
                error: null,
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLogin: true,
            };
        case SIGN_IN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };

        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLogin: false,
                isLoading: false,
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };

        default:
            return state;
    }
}

export default user;
