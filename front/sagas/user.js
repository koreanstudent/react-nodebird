import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

// call -> 함수 동기적 호출
// fork -> 함수 비동기적 호출
// put ->  Action dispatch 동일

function loginAPI() {
 // 서버에 요청을 보내는 부분
}


function* login() {
    try{
        yield call(loginAPI);
        yield put ({ 
            type: LOG_IN_SUCCESS,
        })
    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put ({
            type: LOG_IN_FAILURE,
        })
    }
}

// takeLatest -> LOG_IN 액션이 dispatch되길 기다려서 dispatch될 때 login 제너레이터를 호출
function* wathchLogin() {
    yield takeLatest(LOG_IN,login)
}

export default function* userSaga() {
    yield all ([
        fork(wathchLogin),
    ]);
}