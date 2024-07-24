import React, { useState } from 'react';
import CodeSnippetGallery from './CodeSnippetGallery';
import AdminDashboard from './AdminDashboard';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="App">
      <button 
        onClick={() => setIsAdmin(!isAdmin)} 
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '10px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {isAdmin ? 'Switch to User View' : 'Switch to Admin View'}
      </button>
      {isAdmin ? <AdminDashboard /> : <CodeSnippetGallery />}
    </div>
  );
}

export default App;