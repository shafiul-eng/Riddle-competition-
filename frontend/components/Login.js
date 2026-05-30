import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  return (
    <div>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <button onClick={() => onLogin(username)}>Login</button>
    </div>
  );
}

export default Login;
