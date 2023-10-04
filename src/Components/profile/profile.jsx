import React from 'react';
import Myposts from './myposts/myposts';
import Profileinfo from './profileinfo/profileinfo';
import s1 from './profile.module.css';

const Profile = (props) => {
    return     (
    <div>
      <Profileinfo/>
      <Myposts/>
    </div>
    )
}

export default Profile;