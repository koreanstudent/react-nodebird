## react nodebird 

## 개발환경

front -> npm 설치

npm i react react-dom next

npm i -D nodemon webpack

npm i -D eslint   - 여러사람들이 코딩을 같이 할때 규칙을 정할 수 있다.

npm i -g next

npm i antd  - 디자인 사용

npm i prop-types

npm i redeux react-redux - react-redux를 설치하는 이유는 redux는 별개 이기때문에 react에 사용하기 위함 이다.

npm i next-redux-wrapper -

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


## 페이지 정리

- _app.js : 중복되는 레이아웃들을 분리하는 작업,
            next.js 내장되어있어 만들면 덮어씌운다 (_error.js, _document.js)=> app.js는 props로 Component라고 받는다. 


