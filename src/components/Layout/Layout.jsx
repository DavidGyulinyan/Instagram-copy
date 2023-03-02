import React from 'react';
import "./Layout.css"
import Navbar from "../Navbar/Navbar";
const Layout = ({nickName, avatarUrl, id, children}) => {
    return (
        <div className="layout__root">
            <Navbar nickName={nickName} avatarUrl={avatarUrl} id={id}/>
            <div className='layout__body'>
                {children}
            </div>
        </div>
    );
};

export default Layout;