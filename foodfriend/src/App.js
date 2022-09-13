import './App.css';
import Navbar from './components/Navbar';
import Resta from './pages/resta';
import Friends from './pages/friends';
import Home from './pages/home';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/Resta":
      component = <Resta />
      break
    case "/friends":
      component = <Friends />
      break
  }
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {component}
      </header>
    </div>
  );
}

export default App;
