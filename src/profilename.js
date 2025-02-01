import React from 'react';
import './ProfileName.css';

interface ProfileNameProps {
  username: string;
  isAdmin: boolean;
}

const ProfileName: React.FC<ProfileNameProps> = ({ username, isAdmin }) => {
  return (
    <h1 className={`profile-name ${isAdmin ? 'admin-name' : ''}`}>
      {username}
    </h1>
  );
};

export default ProfileName;
