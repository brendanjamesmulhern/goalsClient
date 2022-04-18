import './App.css';
import GoalsBody from './GoalsBody';

export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: "space-between", alignItems: 'center' }}>
      <header style={{ width: '100vw', height: '15vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
          <div style={{ color: 'white', fontSize: '25px' }}>Goals App</div>
      </header>
      <GoalsBody />
      <footer style={{ width: '100vw', height: '15vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
          <div style={{ color: 'white', fontSize: '18px' }}>By Brendan</div>
      </footer>
    </div>
  )
};