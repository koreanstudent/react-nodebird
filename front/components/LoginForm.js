import React, { useState, useCallback } from 'react';
import { Button, Form, Input} from 'antd';
import Link from 'next/link';
import { useInput } from '../pages/signup';

const LoginForm = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    // 자식 컴포넌트로 보내는 함수는 useCallback 함수로 감싸준다.
    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        console.log({
            id,password,
        })
    },[id,password]);

    return (
        <Form onSubmit={onSubmitForm} style={{padding: '10px'}}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br/>
                <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
            </div>
            <div>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>
    )
}

export default LoginForm;