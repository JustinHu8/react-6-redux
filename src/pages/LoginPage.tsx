import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../store/store';
import { login, logout } from './../features/auth/authSlice';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login(username));
      setUsername(''); // Clear the input
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>MOOC Authentication</h1>
      {isAuthenticated ? (
        <>
          <h2>Welcome, {user}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default LoginPage;