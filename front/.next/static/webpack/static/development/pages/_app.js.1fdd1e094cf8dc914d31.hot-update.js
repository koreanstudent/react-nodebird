webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "C:\\Users\\chang\\Desktop\\web\\react-nodebird\\react-nodebird\\front\\components\\UserProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var UserProfile = function UserProfile() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me; // useCallback -> 자식 컴포넌트에 props로 전달하기 때문에


  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var onLogout = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"]
    });
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"] // back/router/user.js -> login/post 에서 include 팔로윙 팔로워 데이터 가져온다
  , {
    actions: [__jsx("div", {
      key: "twit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "\uD2B8\uC704\uD130 ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), me.Posts.length), __jsx("div", {
      key: "following",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "\uD314\uB85C\uC789 ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), me.Followings.length), __jsx("div", {
      key: "follower",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "\uD314\uB85C\uC6CC ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), me.Followers.length)],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, me.nickname[0]),
    title: me.nickname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: onLogout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\uB85C\uADF8\uC544\uC6C3"));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ })

})
//# sourceMappingURL=_app.js.1fdd1e094cf8dc914d31.hot-update.js.map