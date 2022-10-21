import { Navbar, Container, Nav, Button, NavLink, NavbarBrand, Row } from 
"react-bootstrap";
import "../style/navbarStyle.css";
import logo from "../Assets/Logo.jpg";


const Navigationbar = () => {
  return (
    <Container className="bg.primary">
      <Navbar id="navigationBars">
        
        <Container fluid className="text-white">
          
          <Navbar.Brand id="brandi">
            <img src={logo} className='w-25 m-3'/>
          </Navbar.Brand>
          <Nav>
            <NavLink href="/" className="text-white" to>Beranda</NavLink>

            <NavLink href="/components" className="text-white">Tentang Kita</NavLink>

            <NavLink className="text-white" href="/components/Kegiatan">Kegiatan</NavLink>

            <NavLink href="/components/Login" className="text-white">Experience</NavLink>
            <Nav.Link className="text-white">Berita dan Acara</Nav.Link>
            <Button variant="primary">Contact Us</Button>
          </Nav>
        </Container>
      </Navbar>

      <div className="d-flex justify-content-end m-2 ">
        <input
          className="searchBard"
          type="text"
          placeholder="    Pencaharian.."
        ></input>
      </div>
    </Container>
  );
};

export default Navigationbar;
