import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import API from "../utils/API"
import useToken from "../useToken"

const Profile = () => {
    
  const [User, setUser] = useState([]);
  const {token} = useToken();

  useEffect(() => {
    console.log("Profile")
    API.getUser(token.data.message.email)
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