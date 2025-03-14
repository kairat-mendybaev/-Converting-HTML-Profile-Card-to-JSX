import React from 'react';

function UserProfile({ userName, userEmail }) {
  return (
    <div className="profile-card">
      <h2>User Profile</h2>
      <img src="https://example.com/user-photo.jpg" alt="User Photo" className="photo"/>
      <p>Name: {userName}</p>
      <p>Email: {userEmail}</p>
      <a href={`mailto:${userEmail}`}>Send Email</a>
    </div>
  );
}

export default UserProfile;
