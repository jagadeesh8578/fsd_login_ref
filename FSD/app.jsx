import React, { useEffect, useRef } from 'react';

const LoginPage = () => {
  const usernameRef = useRef(null);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    console.log('Logging in with username:', username);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>Username:</label>
            <input
              type="text"
              id="username"
              ref={usernameRef}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '150vh',
    width: '150vh', 
    backgroundColor: 'rgb(4, 5, 0)',
  },
  formContainer: {
    maxWidth: '400px',
    width: '150%',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#030a2e',
  },
  heading: {
    color: '#fff', // Set heading color to white
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '10px',
  },
  label: {
    marginBottom: '5px',
    display: 'block',
    color: '#fff', // Set label color to white
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #fff',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default LoginPage;
