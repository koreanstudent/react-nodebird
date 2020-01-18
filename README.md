## react nodebird 

## 개발환경 -front

front -> npm 설치

npm i react react-dom next

npm i -D nodemon webpack

npm i -D eslint   - 여러사람들이 코딩을 같이 할때 규칙을 정할 수 있다.

npm i -g next

npm i antd  - 디자인 사용

npm i prop-types

npm i redeux react-redux - react-redux를 설치하는 이유는 redux는 별개 이기때문에 react에 사용하기 위함 이다.

npm i next-redux-wrapper - withRedux 확장성 및 props로 store 컴포넌트를 가져온다

npm i redux-saga - 리덕스의 비동기 요청을 사가에서 요청 ex) 서버요청

npm i -D eslint-config-airbnb , npm install eslint-plugin-jsx-a11y --save-dev (웹접근성) -코드를 d엄격하게 스타일링 airbnb직원이 아니기 때문에 적절히 rules 추가 

npm i -D babel-eslint -바벨 최신 문법 사용  "parser": "babel-eslint", "es6": true

npm i axios - 서버에 요청을 보내주는 모듈

## 용어 정리

- useCallback : 랜더링을 최적화 하기 위해 사용한다.
                첫 번째 파라미터로 콜백 함수를 받고 두번째 파라미터로 배열을 받아 memoize 된 콜백 함수를 반환 해주는 Hook이다.
                두 번째 파 라미터로 받은 배열의 원소 값 중 하나가 변경되어야만 함수의 reference가 변경된다.

- useEffect : 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook입니다. 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태
     - [] : 가장 처음 렌더링 될 때만 실행되고 업데이트 경우에는 실행 할 필요가 없는 경우에 두번째 파라미터로 비어있는 배열을 넣는다.

- useSelector : 리덕스 스토어의 상태에 접근 할 수 있다. 

- prop-types : 부모로부터 받은 데이터를 제대로 받았는지 검증 할 수 있다.

- Redux (state) -> 안정성, state 통제 용이
    - Action -> state를 바꾸는 행동
    - Dispatch -> Action을 실행
    - Reducer -> Action의 결과로 state를 어떻게 바꿀지 정의

- 제너레이터 - 무한의 개념과 비동기 많이 사용
- getInitialProps - 라이프사이클, next에서 제공, 서버로 부터 동적인 데이터를 가져올 수 있다. 가장 최초의 작업

## 페이지 정리

- _app.js : 중복되는 레이아웃들을 분리하는 작업,
            next.js 내장되어있어 만들면 덮어씌운다 (_error.js, _document.js)=> app.js는 props로 Component라고 받는다. 



## 개발환경 -back

- npm i express

- npm i axios  - http 요청보낼때 사용

- npm i bcrypt - 비밀번호 암호화 사용

- npm i cookie-parser - 로그인할때 세션이랑 쿠키 사용

- npm i express-session - 로그인 할때 정보저장을 위한 세션

- npm i dotenv - 환경변수 (비밀번호들을 관리)

- npm i cors - 서버, 프론트 둘의 주소 제약을 풀어줌

- npm i helmet hpp - 노드와 익스프레스의 보안을 담당

- npm i morgan - 서버에 로그 남겨주는 것

- npm i multer - 이미지 업로드

- npm i passport passport-local - 로그인, 회원가입 쉽게 처리 도와주는 패키지

- npm i sequelize sequelize-cli - ORM -> SQL문이랑 자바스크립트랑 연결해주는 것

- npm i -g sequelize-cli

- npm i -D eslint eslint-config-airbnb , npm install eslint-plugin-jsx-a11y --save-dev

- npm i -D nodemon -서버 새로고침

- sequelize init - 디비 구성을 위한 파일들을 만들어 준다.

- npm i mysql2 - mysql을 사용가능하다.
