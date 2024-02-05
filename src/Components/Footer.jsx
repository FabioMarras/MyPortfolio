import { Nav } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <section className="mb-4">
                <Nav className="social-icons justify-content-center">
                  <Nav.Link href="https://github.com/FabioMarras" target="_blank">
                    <FaGithub style={{ fontSize: "xx-large" }} />
                  </Nav.Link>
                  <Nav.Link href="https://www.linkedin.com/in/fabiomarras-webdeveloper/" target="_blank">
                    <FaLinkedin style={{ fontSize: "xx-large" }} />
                  </Nav.Link>
                </Nav>
              </section>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/work">Work</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
