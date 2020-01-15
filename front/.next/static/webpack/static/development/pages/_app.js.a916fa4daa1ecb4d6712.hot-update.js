webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(login),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked4 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked5 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);



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
// while문이 없으면 함수가 끝나버린다.

function watchLogin() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], login);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function loginAPI(loginData) {
  // 서버에 요청을 보내는 부분
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user/login', loginData, {
    withCredentials: true // 쿠키를 주고 받을 수 있다.

  });
}

function login(action) {
  var result;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loginAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
            data: result.data
          });

        case 6:
          _context2.next = 13;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          // loginAPI 실패
          console.error(_context2.t0);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"]
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function watchSignUp() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function signUpAPI(signUpData) {
  // 서버에 요청을 보내는 부분
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user/', signUpData);
}

function signUp(action) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);

        case 3:
          _context4.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
          });

        case 5:
          _context4.next = 12;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          // signUpAPI 실패
          console.error(_context4.t0);
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"]
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 7]]);
}

function userSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

/***/ })

})
//# sourceMappingURL=_app.js.a916fa4daa1ecb4d6712.hot-update.js.map