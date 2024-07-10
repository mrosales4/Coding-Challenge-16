// U22978120

import React from 'react';
import Gallery from './Gallery';
import Header from './Header'; 

function App() {
  const teamData = [
    { name: 'Jermaine cole', role: 'CEO' },
    { name: 'Aubrey Smith', role: 'CFO' },
    { name: 'Kendrick Lamar', role: 'Security' },
  ];

  return (
    <div className="App">
      <Header title="Meet the startup team" />  
      <Gallery teamMembers={teamData} /> 
    </div>
  );
}

export default App;
