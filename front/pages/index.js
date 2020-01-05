import React from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
// 메인화면

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        User: {
            id:1,
            nickname: '이창현',
            
        },
        content: '첫 번째 게시글'
    }]
};


const Home = () => {
    return (
       <div>
           {dummy.isLoggedIn && <PostForm/>}
            {dummy.mainPosts.map((c)=> {
                return (
                    <PostCard key={c} post={c}/>
                )
            })}
       </div>
    );
};

export default Home;