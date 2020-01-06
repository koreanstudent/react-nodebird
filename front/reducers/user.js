
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

export const LOG_IN ='LOG_IN'; // 액션의 이름
export const LOG_IN_SUCCESS='LOG_IN_SUCCESS';
export const LOG_IN_FAILURE='LOG_IN_FAILURE';
export const LOG_OUT='LOG_OUT';
export const SIGN_UP='SIGN_UP';
export const SIGN_UP_SUCCESS='SIGN_UP_SUCCESS';

export const loginAction = {
    type: LOG_IN,
    data: {
        nickname: '이창현'
    },
    
};

export const logoutAction = {
    type: LOG_OUT,
}
// Action에 넣을 데이터가 동적인 경우에는 action을 함수로 만든다.
export const signUpAction = (data) => {
    return {
    type: SIGN_UP,
    data, 
    }
}

const reducer = (state= intialState, action) => {
    switch (action.type){
        case LOG_IN: {  //로그인 성공시
            return {
                ...state,
                isLoggedIn:true,
                user:dummyUser,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        }
        case SIGN_UP : {
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