import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import homeVideo from './img/Bbdostudiosreel081022bbdostudiosoptimized.mp4'


function Home() {
    // homeVideo.play
    return (
            <video loop muted autoPlay controls id='video'>
                <source src={homeVideo} type="video/mp4" />
            </video>
    );
  }
  
  export default Home;