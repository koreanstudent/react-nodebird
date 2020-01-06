import React, { useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../reducers/user';
// 메인화면



// dispatch => Action을 디스패치 하는함수
//  setState -> useDispatch 
//  useState -> useSelector
const Home = () => {
    const { isLoggedIn } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch (loginAction);
        dispatch (logoutAction);
    }, []);

    return (
       <div>
           {isLoggedIn && <PostForm/>}
            {mainPosts.map((c)=> {
                return (
                    <PostCard key={c} post={c}/>
                )
            })}
       </div>
    );
};

export default Home;