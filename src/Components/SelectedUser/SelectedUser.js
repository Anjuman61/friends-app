import React from 'react';
import Friends from '../Friends/Friends';

const SelectedUser = (props) => {
    console.log(props.selectedUser)
    const {name, image} = props.selectedUser
    return (
        <div>
      
                <p>{name}</p>
                <img src={image} alt=""/>

        </div>
    );
};

export default SelectedUser;