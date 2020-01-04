import React, {useState, useCallback} from 'react';
import { Form,Input, Checkbox, Button } from 'antd';

// 커스텀 훅
// export -> 모듈처럼 사용하면 다른곳에서도 사용가능
export const useInput = (initValue =null) => {
    const [value,setter] =useState(initValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    },[]);
    return [value, handler];
};


const Signup = () => {
    const [passwordCheck, setPasswordCheck] =useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] =useState(false);
    

    const [id, onChangeId] = useInput('');
    const [nick,onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');
    // const onChangeId =(e) => {
    //     setId(e.target.value);
    // };
    // const onChangeNick = (e) => {
    //     setNick(e.target.value);
    // };
    // const onChangePassword = (e) => {
    //     setPassword(e.target.value);
    // };

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if (password !== passwordCheck){
            return setPasswordError(true);
        }
        if (!term){
            return setTermError(true);
        }
    },[password,passwordCheck,term]);
    

    const onChangePasswordChk = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    },[password]);
    
    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    },[]);


    return( 
        <>
            <Form onSubmit={onSubmit} style={{padding:10}}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId}/>
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br/>
                    <Input name="user-nick" value={nick} required onChange={onChangeNick}/>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input name="user-password"   type="password" value={password} required onChange={onChangePassword}/>
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br/>
                    <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordChk}/>
                    {passwordError && <div style ={{color: 'red'}}> 비밀번호가 일치하지 않습니다. </div>}
                </div>
                <div>
                    <Checkbox name="user-term" value={term}  onChange={onChangeTerm}>동의합니다</Checkbox>
                    {termError && <div style ={{color: 'red'}}> 약관에 동의 하셔야합니다. </div>}
                </div>
                <div style={{marginTop: 10}}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </>
    );
};

export default Signup;