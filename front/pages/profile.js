import React from 'react';
import { Input, Button, List, Card, Icon,Form } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
const Profile = () => {
    return (
        <div>
            <NicknameEditForm/>
            <List
                style={{ marginBottom: '20px'}}
                grid= {{ gutter: 4, xs: 2, md: 3}}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{width: '100%'}}>더 보기</Button>}
                bordered
                dataSource={['이창현','hh','노드노드']}
                renderItem= {item => (
                    <List.Item style={{ marginTop: '20px'}}>
                        <Card actions={[<Icon key="stop" type="stop"/>]}><Card.Meta description={item} /></Card>
                    </List.Item>

                )}
            />
            <List
                style={{ marginBottom: '20px'}}
                grid= {{ gutter: 4, xs: 2, md: 3}}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{width: '100%'}}>더 보기</Button>}
                bordered
                dataSource={['이창현','hh','노드노드']}
                renderItem= {item => (
                    <List.Item style={{ marginTop: '20px'}}>
                        <Card actions={[<Icon key="stop" type="stop"/>]}><Card.Meta description={item} /></Card>
                    </List.Item>

                )}
            />
        </div>
    )
}

export default Profile;