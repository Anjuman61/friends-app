import React, { useState } from 'react';
import './Friends.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Friends = (props) => {
    const{image,name,email,phone} = props.friend;
    const [isClick,setIsClicked]=useState(false)
   
    return (
        <div className ='friends'>
            <img src={image} alt=""/>
            <h2>Name:{name}</h2>
            <p>Email Id: {email}</p>
            <p>Phone Number: {phone}</p>
            <button disabled={isClick} className ='add-button' onClick={()=>props.handleAddUser(props.friend)+ setIsClicked(true)}><FontAwesomeIcon icon={faUserPlus}/>   Add Friend</button>
        </div>
    );
};

export default Friends;