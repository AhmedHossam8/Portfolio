import './App.css';
import Divider from '@mui/joy/Divider';
import ResponsiveAppBar from './components/header/Navbar';
import Home from './components/home/home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">

      <ResponsiveAppBar />

      <Home />

      <Divider
        style={{
          color: "white",
          marginTop: "10rem",
          marginBottom: "10rem"
        }}
      >
        ~ ~ ~
      </Divider>

      <About />

      <Divider
        style={{
          color: "white",
          marginTop: "10rem",
          marginBottom: "10rem"
        }}
      >
        ~ ~ ~
      </Divider>

      <Projects />

      <Divider
        style={{
          color: "white",
          marginTop: "12rem",
          marginBottom: "12rem"
        }}
      >
        ~ ~ ~
      </Divider>

      <Skills />

    </div>
  );
}

export default App;
