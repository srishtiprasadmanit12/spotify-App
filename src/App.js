import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import PlayerPlaylist from './components/PlayerPlaylist';
function App() {
  return (
    <div>
      <Header/>
      <div className="player-container">
      <div className='side-bar'>
      <Sidebar/>
      </div>
      <div className='player-playlist'>
      <PlayerPlaylist/>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
