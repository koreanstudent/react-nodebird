## react nodebird 

## 개발환경

front -> npm 설치

npm i react react-dom next

npm i -D nodemon webpack

npm i -D eslint   - 여러사람들이 코딩을 같이 할때 규칙을 정할 수 있다.

npm i -g next

npm i antd  - 디자인 사용

## 용어 정리

- useCallback : 랜더링을 최적화 하기 위해 사용한다.
                첫 번째 파라미터로 콜백 함수를 받고 두번째 파라미터로 배열을 받아 memoize 된 콜백 함수를 반환 해주는 Hook이다.
                두 번째 파라미터로 받은 배열의 원소 값 중 하나가 변경되어야만 함수의 reference가 변경된다.
