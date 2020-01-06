export const initialState ={
    mainPosts: [{
        User: {
            id:1,
            nickname: '이창현',
            
        },
        content: '첫 번째 게시글'
    }],
    imagePath: [],
};

export const ADD_POST = 'ADD_POST';
export const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
    type: ADD_POST
}

const addDummy = {
    type :ADD_DUMMY,
    data: {
        content: 'hello',
        UserId: 1,
        User: {
            nickname: '이창현'
        }
    }
}
// 불변성을 유지하기위해 스트레드 문법 사용
const reducer = (state =initialState, action) => {
    switch (action.type){
        case ADD_POST: {
            return {
                ...state,
            }
        }
        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts],
            }
        }
        default: {
            return{
                ...state,
            }
        }
    }
}

export default reducer;