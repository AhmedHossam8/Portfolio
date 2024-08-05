import './App.css';
import Divider from '@mui/joy/Divider';
import ResponsiveAppBar from './components/header/Navbar';
import Home from './components/home/home';
import About from './components/about/About';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Home />
      <Divider
        style={{
          color: "white",
          marginTop: "12rem",
          marginBottom: "12rem"
        }}
      >
        ~ ~ ~
      </Divider>
      <About />
    </div>
  );
}

export default App;
