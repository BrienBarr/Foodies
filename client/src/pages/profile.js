// create profile page should display all post by this user
// as well as have links back to home page as well as create post page
import React from 'react';
import UserCard from '../components/UserCard/';

const Profile = () => {
    return (
        <div>
          <h2>My Profile</h2>
          <UserCard />
        </div>
    )
}
 export default Profile;