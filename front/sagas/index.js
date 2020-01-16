import { all, call } from 'redux-saga/effects';
import user from './user';
import post from './post';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api'; // 한번 불러온 모듈은 캐싱이 된다.

export default function* rootSaga() {
    yield all ([
        call(user),
        call(post),
    ])
}