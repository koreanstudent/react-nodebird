import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import reducer from '../reducers';
import withRedux from'next-redux-wrapper';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


// 레이아웃
// store는 state, action, reducer가 합쳐진 것
// withRedux()(NodeBird); -> 기존 컴퍼넌트를 확장시키는 것
// withRedux -> props로 store 컴포넌트를 가져온다 next.js

const NodeBird = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Head>
            <title>NodeBird</title>
            <link rel ="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
            </Head>
            <AppLayout>
                <Component/>
            </AppLayout>
        </Provider>
    )
};

// node -> renderd : numbers, string, elements or an array .. 
NodeBird.propTypes = {
    Component: PropTypes.elementType,
    store: PropTypes.object,
};

export default withRedux((initialState, options)=> {
    const store =createStore(reducer, initialState);
    // 여기에다가 store 커스터마이징
    return store;
  })(NodeBird);