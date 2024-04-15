import React, { useContext } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context'

function LoginPage() {

    const { setIsAuth } = useContext(AuthContext);

    const login = (e: any) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('isAuth', 'true');
    }

    return (
        <div className='App'>
            <form onSubmit={login}>
                <MyInput type="text" />
                <MyInput type="password" />
                <MyButton>Login </MyButton>
            </form>
        </div>
    );
}

export default LoginPage;
