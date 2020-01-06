
const dummyUser = {
    nickname: '이창현',
    Post: [],
    Followers: [],
    Followings: [],
    signData: [],
};

// store
export const intialState = {
    isLoggedIn: false,
    user: null,
};

export const LOG_IN_REQUEST ='LOG_IN_REQUEST'; // 액션의 이름
export const LOG_IN_SUCCESS='LOG_IN_SUCCESS';
export const LOG_IN_FAILURE='LOG_IN_FAILURE';

export const LOG_OUT_REQUEST='LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS='LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE='LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST='SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS='SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE='SIGN_UP_FAILURE';

export const loginAction = {
    type: LOG_IN_REQUEST,
    data: {
        nickname: '이창현'
    },
    
};

export const logoutAction = {
    type: LOG_OUT_REQUEST,
}
// Action에 넣을 데이터가 동적인 경우에는 action을 함수로 만든다.
export const signUpAction = (data) => {
    return {
    type: SIGN_UP_REQUEST,
    data, 
    }
}

const reducer = (state= intialState, action) => {
    switch (action.type){
        case LOG_IN_REQUEST: {  //로그인 성공시
            return {
                ...state,
                loginData: action.data,
                isLoading: true,
            }
        }
        case LOG_IN_SUCCESS: {
            return {
                ...state,
                isLoggedIn:true,
                user:dummyUser,
                isLoading: false
            }
        }
        case LOG_OUT_REQUEST: {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        }
        case SIGN_UP_REQUEST : {
            return {
                ...state,
                signData: action.data
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }

}

export default reducer;