import './App.css';
import ResponsiveAppBar from './components/header/Navbar';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Home />
    </div>
  );
}

export default App;
