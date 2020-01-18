import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Card } from 'antd';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import { LOAD_USER_REQUEST } from '../reducers/user';
import PostCard from '../components/PostCard';

const User = ({ id }) => {
    const dispatch = useDispatch();
    const { mainPosts } = useSelector(state => state.post);
    const { userInfo } = useSelector(state => state.user); // userInfo 남의 정보
  
    // 남의 정보와 남의 게시물 가져온다.
    useEffect(() => {
      dispatch({
        type: LOAD_USER_REQUEST,
        data: id,
      });
      dispatch({
        type: LOAD_USER_POSTS_REQUEST,
        data: id,
      });
    }, []);
    return (
      <div>
        {userInfo
          ? (
            <Card
              actions={[
                <div key="twit">
                  짹짹
                  <br />
                  {userInfo.Posts}
                </div>,
                <div key="following">
                  팔로잉
                  <br />
                  {userInfo.Followings}
                </div>,
                <div key="follower">
                  팔로워
                  <br />
                  {userInfo.Followers}
                </div>,
              ]}
            >
              <Card.Meta
                avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
                title={userInfo.nickname}
              />
            </Card>
          )
          : null}
        {mainPosts.map(c => (
          <PostCard key={+c.createdAt} post={c} />
        ))}
      </div>
    );
  };
//  getInitialProps 거쳐서 propTypes
User.propTypes = {
    id : PropTypes.number.isRequired,
}

// next에서 제공, 서버로 부터 동적인 데이터를 가져올 수 있다. 가장 최초의 작업
User.getInitialProps = async (context) => {
    console.log('User getInitialProps', context.query.id);
    return { id: parseInt(context.query.id, 10) };
  };

export default User;
