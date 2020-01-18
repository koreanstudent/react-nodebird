import { all, fork, takeLatest, put, delay, call } from 'redux-saga/effects';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE, LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';
import axios from 'axios';



function addPostAPI(postData) {
    return axios.post('/post', postData, {
      withCredentials: true, // 로그인 한사람만 글쓰게할수잇게 쿠키를 보낸다
    });
  }

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
        });
    } catch (e){
        yield put({
            type: ADD_POST_FAILURE,
            error: e,
        })
    }
}


function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST,addPost);
}

function loadMainPostsAPI(){

    return axios.get('/posts', {});
}

function* loadMainPosts() {
    try {
        const result = yield call(loadMainPostsAPI);
        yield put({
            type: LOAD_MAIN_POSTS_SUCCESS,
            data: result.data
            
        });
    } catch (e){
        yield put({
            type: LOAD_MAIN_POSTS_FAILURE,
            error: e,
        })
    }
}


function* watchloadMainPosts() {
    yield takeLatest(LOAD_MAIN_POSTS_REQUEST,loadMainPosts);
}

function addCommentAPI(){

}

function* addComment(action) {
    try {
        yield delay(2000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: {
                postId: action.data.postId,
            }
        });
    } catch (e){
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: e,
        })
    }
}


function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST,addComment);
}

export default function* postSaga() {
    yield all ([
        fork(watchAddPost),
        fork(watchloadMainPosts),
        fork(watchAddComment)
    ]);
}