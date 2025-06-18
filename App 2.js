import React, { useState } from 'react';
import { signInWithGoogle } from './firebase';

function App() {
  const [user, setUser] = useState(null);

  const login = async () => {
    const result = await signInWithGoogle();
    setUser(result.user);
  };

  return (
    <div>
      <h1>LinkVault</h1>
      {!user ? <button onClick={login}>Login with Google</button> : <p>Welcome, {user.displayName}</p>}
    </div>
  );
}

export default App;