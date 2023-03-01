import React, {useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        console.log('logout')
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Logout
            </MyButton>
            <div className="navbar__links">
                <Link className="active" to="/about">About Site</Link >
                {'      '}
                <Link  to="/posts">Records</Link >
            </div>
        </div>
    );
};

export default Navbar;
