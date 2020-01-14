import { all, fork, takeLatest, takeEvery, call, put, take, delay } from 'redux-saga/effects';
import { LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../reducers/user';
import axios from 'axios';
// all -> 여러 이펙트를 동시에 실행할 수 있게 합니다.
// call -> 함수 동기적 호출
// ex) 서버에 요청을하면 응답이 될때까지 기다렸다가 다음으로 넘어감, 서버요청할때 많이 사용?
// fork -> 함수 비동기적 호출
// ex) 서버에 요청하면 응답이오던 말든 다음으로 넘어감.
// put ->  Action dispatch 동일
// take => 해당 액션이 dispatch되면 제너레이터를 next하는 이펙트
// takeLatest -> 이전 요청이 끝나지 않은게 있다면 이전 요청을 취소 액션을 여러번 요청하는 경우 마지막 액션을 실행
//  ex) 로그인 버튼 여러번 했을 경우 로그인 요청이 여러개 나타나는 것을 막을 수 있다.
// takeEvery -> while(true)
//  ex) 여러번 클릭이 유효한 거면 사용, 숫자 카운트 등등
// delay -> delay(1000)

// function* watchHello() {
//     yield takeEvery(HELLO_SAGA, function*(){
//         console.log(1);
//         console.log(2);
//     })
// }

// function* watchHello() {
//     while(true){
//     yield take(HELLO_SAGA);
//         console.log(1);
//         console.log(2);
//     }
// }




// function* watchHello() {
//     console.log('before saga');

//     // while(true)  제너레이터에서만 사용가능한 문법
//     // 클릭이벤트를 횟수 제한도 가능, 반복 (for문) 사가에서 동작하지 않아도 리듀서는 동작 -> 별개
//     while(true){
//         yield take(HELLO_SAGA);
//         console.log('hello saga');
//     }
//     // 비동기 요청, 타이머 넣어도 되고
// }

axios.defaults.baseURL = 'http://localhost:8080/api';

// while문이 없으면 함수가 끝나버린다.
function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST,login);
}

function loginAPI(loginData) {
    // 서버에 요청을 보내는 부분
    return axios.post('/user/login', loginData);
}
   
   
function* login(action) {
    try{
        const result = yield call(loginAPI, action.data);
        yield put ({ 
            type: LOG_IN_SUCCESS,
            data: result.data,
        })
    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put ({
            type: LOG_IN_FAILURE,
        })
    }
}

function* watchSignUp(){
    yield takeEvery(SIGN_UP_REQUEST,signUp);
}

function signUpAPI(signUpData) {
    // 서버에 요청을 보내는 부분
    return axios.post('/user', signUpData);
}
   
   
function* signUp(action) {
    try{
        yield call(signUpAPI, action.data);
        yield put ({ 
            type: SIGN_UP_SUCCESS,
        })
    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put ({
            type: SIGN_UP_FAILURE,
        })
    }
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchSignUp),
    ]);

}