import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton'
import { AuthContext } from '../../../context';

const MyNavbar = () => {

    const { setIsAuth } = useContext(AuthContext);
    const logot = () => {
        setIsAuth(false);
        localStorage.removeItem('isAuth');
    }
    return (
        <div className='navbar'>
            <MyButton onClick={logot}>Logout</MyButton>
            <div className='navbar__links'>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
}

export default MyNavbar;
