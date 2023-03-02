import React from 'react';
import "./Navbar.css"
import UserBadge from "../UserBadge/UserBadge";

const Navbar = ({nickName, avatarUrl, id}) => {
    return (
        <div className="navbar__root">
            <div className="navbar__wrapper">
                <span>INSTAGRAM</span>
                <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
            </div>
        </div>
    );
};

export default Navbar;