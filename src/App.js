import './App.css';
import GoalsBody from './GoalsBody';
import AuthBody from './AuthBody';
import React from 'react';

export default function App() {
  const [auth, setAuth] = React.useState(false);
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: "space-between", alignItems: 'center' }}>
      <header style={{ width: '100vw', height: '15vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
          <div style={{ color: 'white', fontSize: '25px' }}>Goals App</div>
      </header>
      { auth ? 
        <GoalsBody auth={auth} />
      :
        <AuthBody setAuth={setAuth} />
      }
      <footer style={{ width: '100vw', height: '15vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
          <div style={{ color: 'white', fontSize: '18px' }}>By Brendan</div>
      </footer>
    </div>
  )
};