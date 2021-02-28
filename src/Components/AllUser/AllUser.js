import React,{useState} from 'react';
import fakeData from '../../fakeData/data.json'
import Friends from '../Friends/Friends';
import SelectedUser from '../SelectedUser/SelectedUser';
import './AllUser.css'



const AllUser = () => {
 console.log(fakeData)
const [friends, setFriends] = useState(fakeData)
const [selectedUser, setSelectedUser] = useState([])
const handleAddUser = (user) =>{
    const newSelected = [...selectedUser,user]
    setSelectedUser(newSelected)
}

   
  return (
    <div className="friends-container">
      <div className='allFriends'>
        {friends.map(friend =>
          <Friends
            friend={friend}
            handleAddUser={handleAddUser}
          >
          </Friends>)}
      </div>

      <div className='selectedUser'>
            <h2>Selected Friends</h2>
            <h4>Number of Selected Friends:{selectedUser.length}</h4>

        {selectedUser.map(user =>
        <SelectedUser selectedUser={user}>
          
        </SelectedUser>)}
    
      </div>

    </div>
    );
};

export default AllUser;