import { Card, Avatar, Button } from "antd";
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducers/user";


const UserProfile = () => {
    const { me } = useSelector(state => state.user);
// useCallback -> 자식 컴포넌트에 props로 전달하기 때문에
    const dispatch =useDispatch();
    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST
        });
    }, []);
    return (
        <Card
            actions= {[
                // <div key="twit">트위터 <br/>{me.Post.length}</div>,
                // <div key="following">팔로잉 <br/>{me.Followings.length}</div>,
                // <div key="follower">팔로워 <br/>{me.Followers.length}</div>,
            ]}>
            <Card.Meta
                avatar= {<Avatar>{me.nickname[0]}</Avatar>}
                title= {me.nickname}
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile;