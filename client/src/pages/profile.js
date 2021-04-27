import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import API from "../utils/API"

const Profile = () => {
    
  const [User, setUser] = useState([]);

  useEffect(() => {
    console.log("Profile")
    API.getUser("tussing40@gmail.com") // not the right api route but close lookiong for logged in email
      .then((res) => {

        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

    return (
        <div>
          <h2>Profile</h2>
                <UserCard
                  key = {User.id}
                  data={User} />        
           
        </div>
    )
}
export default Profile;