// U22978120

import React from 'react';
import Profile from './Profile';

function Gallery({ teamMembers }) {
  return (
    <div className="gallery">
      {teamMembers.map((member) => (
        <Profile key={member.name} {member} /> 
      ))}
    </div>
  );
}

export default Gallery;
