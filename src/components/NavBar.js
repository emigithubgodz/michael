import { useEffect, useState } from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import logo from "../assets/img/emilogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      seScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {["home", "education", "projects", "skills", "contact"].map((link) => (
              <Nav.Link
                key={link}
                href={`#${link}`}
                className={activeLink === link ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/michael-balajadia-8417322b9/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/Porogami.18/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/mike.airforce1s/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
          </span>
      

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
