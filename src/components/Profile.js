import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user: currentUser } = useSelector(state => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <h3>
        <strong>{currentUser.user.name}</strong>
        {' '}
        Profile
      </h3>
      <p>
        <strong>Id:</strong>
        {' '}
        {currentUser.user.id}
      </p>
      <p>
        <strong>Email:</strong>
        {' '}
        {currentUser.user.email}
      </p>
    </div>
  );
};

export default Profile;
