import React from 'react';
import { Menu,Input, Row, Col } from 'antd';
import Link from 'next/Link';
import LoginForm from './LoginForm';
import UserProfile from '../components/UserProfile';
import { useSelector } from 'react-redux';

// xs : 모바일 , sm : 작은 화면, md : 중간 화면, lg : 큰 화면

// gutter : col간의 간격



const AppLayout = ({children}) => {
    // 로그인 여부 체크
    const { isLoggedIn} = useSelector(state => state.user);

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
                    {isLoggedIn ? <UserProfile/>
                    :
                    <LoginForm/>
                    }
                </Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6}>
                    {/* <Link href ="https://github.com/koreanstudent"><a target="_blank">Made by chang</a></Link> */}
                </Col>
            </Row>
            
        </div>
    );
};

export default AppLayout;