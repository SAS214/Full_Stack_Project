import PlayerReport from './components/PlayerReport';
import './App.css';

function App() {
  return (

    <div className="container-fluid">
      <nav  className='nav-wrapper #0d47a1 blue darken-4'>
        <div className="center-align">
          <a href="#">Player Scouting Report System</a>
        </div>
      </nav>
      <div className='row'>
        <PlayerReport />
      </div>
    </div>
  );
}

export default App;
