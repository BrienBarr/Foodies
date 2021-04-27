// create profile page should display all post by this user
// as well as have links back to home page as well as create post page
import React from 'react';
import Login from '../components/Login'
import UserCard from '../components/UserCard/';
import useToken from '../useToken';

const Profile = () => {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />;
  }

    return (
        <div>
          <h2>My Profile</h2>
          <UserCard />
        </div>
    )
}
 export default Profile;