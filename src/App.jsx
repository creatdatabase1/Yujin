import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 60px)", // Adjusts for the navbar height
        padding: "20px",
        flexWrap: "wrap", // Allows wrapping on smaller screens
      }}
    >
      {/* Text Content */}
      <div style={{ flex: "1", minWidth: "300px", textAlign: "center", padding: "20px" }}>
        <h1
          style={{
            fontSize: "5rem",
            fontWeight: "bold",
            textShadow: "2px 2px 5px rgba(0,0,0,1)",
            color:'skyblue'
          }}
        >
          Goodday yall!
        </h1>
        <p
          style={{
            fontSize: "2rem",
            maxWidth: "700px",
            textShadow: "1px 1px 3px rgba(0,0,0,1)",
            margin: "0 auto",
            color: 'white',
          }}
        >
          This site is my personal website where you can learn about myself, my hobbies, education, and contact information.
        </p>
      </div>

      {/* Image */}
      <div style={{ flex: "1", minWidth: "500px", display: "flex", justifyContent: "center" }}>
        <img
          src="Naruto clássico.gif"
          alt="Profile"
          style={{
            maxWidth: "100%",
            maxHeight: "400px",
            borderRadius: "15px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
          }}
        />
      </div>
    </div>
  );
}

function About() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '200px',
        backdropFilter: 'blur(0px)', // Subtle blur effect
        color: 'red', // Text color for readability
        minHeight: '20vh', // Ensures the section fills the viewport height
        display: 'flex', // Centers content
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>About Me</h1>
      <p style={{ fontSize: '2rem', maxWidth: '800px', margin: '0 auto', color:'white', }}>
      Hello! I'm Eugene, 21 years old, I'm a happy and cute person who loves creating memorable moments with others.
      </p>
    </div>
  );
}

function Education() {
  return (
    <div style={{ fontSize:'5rem',textAlign: 'center', padding: '200px', color:'white' }}>
      <h1>Education</h1>
      <ul style={{ fontSize: '2.5rem', listStyleType: 'none', padding: '0', color: 'black' }}>
        <li>College: Bachelor of Science in Information System(NCF)</li>
        <li>High School: Camarines Sur National High School</li>
        <li>Elementary School: Calauag Elementary School</li>
      </ul>
    </div>
  );
}

function Hobbies() {
  const hobbies = [
    {
      image: "Naruto.jpg",
      description: "Watching Anime.",
    },
    {
      image: "naruto1.jpg",
      description: "Listening Music.",
    },
    {
      image: "sanaall.jpg",
      description: "Playing Drums.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      {hobbies.map((hobby, index) => (
        <div
          key={index}
          style={{
            textAlign: "center",
            maxWidth: "300px",
            margin: "10px",
          }}
        >
          {/* Image */}
          <img
            src={hobby.image}
            alt={`Hobby ${index + 1}`}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          />
          {/* Description */}
          <p
            style={{
              marginTop: "10px",
              fontSize: "1rem",
              fontWeight: "bold",
              color: 'white',
            }}
          >
            {hobby.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function Contact() {
  return (
    <div style={{ textAlign: 'center', padding: '150px', color: 'black' }}>
      <h1>Contact Me</h1>
      <p style={{ fontSize: '2rem', maxWidth: '800px', margin: '0 auto', color: 'black' }}>
        I'd love to hear from you! Feel free to reach out through any of the methods below:
      </p>
      <ul style={{ fontSize: '1.5rem', listStyleType: 'none', padding: '0', marginTop: '40px' }}>
        <li>Email: <a href="mailto:terence@example.com" style={{ color: 'black' }}>evfavorito@gbox.ncf.edu.ph</a></li>
        <li>Phone: 09851105159</li>
        <li>GitHub: <a href="https://github.com/creatdatabase1" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>github.com/creatdatabase1</a></li>
      </ul>
    </div>
  );
}

function App() {
  const location = useLocation();

  // Map route paths to specific background images
  const backgroundStyles = {
    "/": {
      backgroundImage: 'url("akatsuki.jpg")',
    },
    "/about": {
      backgroundImage: 'url("abt.gif")',
    },
    "/education": {
      backgroundImage: 'url("Ninja_Academy.webp")',
    },
    "/hobbies": {
      backgroundImage: 'url("wait.gif")',
    },
    "/contact": {
      backgroundImage: 'url("download.gif")',
    },
  };

  const currentStyle = backgroundStyles[location.pathname] || {
    backgroundImage: 'url("/default-background.jpg")',
  };

  return (
    <div
      style={{
        ...currentStyle,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        paddingTop: "60px",
        position: "relative",
      }}
    >
      <Navbar bg="clear" fixed="top">
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "bold", color: "white" }}>
            Yujin's Page
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link-hover">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-hover">About</Nav.Link>
            <Nav.Link as={Link} to="/education" className="nav-link-hover">Education</Nav.Link>
            <Nav.Link as={Link} to="/hobbies" className="nav-link-hover">Hobbies</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-hover">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div style={{ color: 'white', paddingTop: '80px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Wrapper;