
const dummyUser = {
    nickname: '이창현',
    Post: [],
    Followers: [],
    Followings: [],
};

// store
export const intialState = {
    isLoggedIn: false,
    user: null,
};

export const LOG_IN ='LOG_IN'; // 액션의 이름
export const LOG_OUT='LOG_OUT';

export const loginAction = {
    type: LOG_IN,
    data: {
        nickname: '이창현'
    },
};

export const logoutAction = {
    type: LOG_OUT,
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
        default: {
            return {
                ...state,
            }
        }
    }

}

export default reducer;