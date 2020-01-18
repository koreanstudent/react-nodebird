import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import reducer from '../reducers';
import withRedux from'next-redux-wrapper';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';



// 레이아웃
// store는 state, action, reducer가 합쳐진 것
// withRedux()(NodeBird); -> 기존 컴퍼넌트를 확장시키는 것
// withRedux -> props로 store 컴포넌트를 가져온다 next.js

const NodeBird = ({ Component, store, pageProps }) => {
    return (
        <Provider store={store}>
            <Head>
            <title>NodeBird</title>
            <link rel ="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
            </Head>
            <AppLayout>
                <Component {...pageProps}/>
            </AppLayout>
        </Provider>
    )
};

// node -> renderd : numbers, string, elements or an array .. 
NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
    store: PropTypes.object.isRequired,
    pageProps: PropTypes.object.isRequired,
};
// context next에서 넣어줌 콘솔로 확인해보면 가능 
// 실행순서 : NodeBird.getInitialProps  -> Component.getInitialProps(ctx) ex) Hashtag.getInitialProps -> pageProps -> NodeBird.props 받고 -> Component {...pageProps}/> -> 각 컴포넌트 props받는다.
NodeBird.getInitialProps = async (context) => {
    console.log(context);
    const { ctx, Component } = context;
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  };

// 미들웨어는 액션과 스토어 사이에서 동작합니다.
// compose -> 미들웨어 여러개 합성하는것
// applyMiddleware -> 미들웨어 적용해주는것
export default withRedux((initialState, options)=> {
    // 여기에다가 store 커스터마이징
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares)) 
    : compose(applyMiddleware(...middlewares), !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'?
     window.__REDUX_DEVTOOLS_EXTENSION__(): (f) => f,
     );
    const store =createStore(reducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);
    return store;
  })(NodeBird);