import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Mainpage from './Components/mainpage';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import InfoForm from './Components/InfoForm';
import Footer from './Components/Footer';
import Newsletter from './Components/Newsletter';
function App() {
  return (
    <div >
       <Header />
    {/* <Mainpage/>*/}
       <Skills/>
      <Projects />
      <InfoForm />
    {/* <Newsletter/>*/}
    {/* <Footer /> */}
    </div>
  );
}

export default App;
