import React, { useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import {  useSelector } from 'react-redux';
// 메인화면

// dispatch => Action을 디스패치 하는함수
//  setState -> useDispatch 
//  useState -> useSelector
const Home = () => {
    const { me } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);

    return (
       <div>
           {me && <PostForm/>}
            {mainPosts.map((c)=> {
                return (
                    <PostCard key={c} post={c}/>
                )
            })}
       </div>
    );
};

export default Home;