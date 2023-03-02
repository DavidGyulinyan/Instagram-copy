import React from 'react';
import "./UserBadge.css"
import {useNavigate} from "react-router-dom";
const UserBadge = ({nickName, avatarUrl, id}) => {
    const navigate = useNavigate()
    return (
        <div className="userBadge__root" onClick={() => navigate(`/${id}`)}>
            {avatarUrl
                ? <img src={avatarUrl} alt="logo" className="userBadge__avatar"/>
                : <div className="userBadge__placeHolder"></div>
            }
            <span className="userBadge__name">{nickName}</span>
        </div>
    );
};

export default UserBadge;