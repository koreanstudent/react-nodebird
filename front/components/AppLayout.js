import React from 'react';
import { Menu,Input, Row, Col, Card, Avatar } from 'antd';
import Link from 'next/Link';
import LoginForm from './LoginForm';

// xs : 모바일 , sm : 작은 화면, md : 중간 화면, lg : 큰 화면

// gutter : col간의 간격

const dummy = {
    nickname: '이창현',
    Post: [],
    Followers: [],
    Followings: [],
    isLoggedIn: false,
};

const AppLayout = ({children}) => {
    return ( 
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign:'middle'}}/>
                </Menu.Item>
            </Menu>
            <Row gutter={10}>
                <Col xs={24} md={6} >
                    {dummy.isLoggedIn ?<Card
                      actions= {[
                          <div key="twit">트위터 <br/>{dummy.Post.length}</div>,
                          <div key="following">팔로잉 <br/>{dummy.Followings.length}</div>,
                          <div key="follower">팔로워 <br/>{dummy.Followers.length}</div>,
                      ]}>
                        <Card.Meta
                            avatar= {<Avatar>{dummy.nickname[0]}</Avatar>}
                            title= {dummy.nickname}
                        />
                    </Card>
                    :
                    <LoginForm/>
                    }
                </Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6}></Col>
            </Row>
            
        </div>
    );
};

export default AppLayout;