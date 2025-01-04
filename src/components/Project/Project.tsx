import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/rornmakaraaa" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://github.com/rornmakaraaa/I4-Internship.git" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Company Information System</h3>
              <p>CAMAI is a Company Information System designed to help service-based companies manage software development projects efficiently. It simplifies project tracking, timeline management, and client updates for services like UX/UI design, web development,
                and mobile app development.</p>
            </div>
            <footer> <ul className="tech-list"> <li>NextJs</li> <li>ExpressJs</li> <li>MySQL</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/rornmakaraaa" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://github.com/rornmakaraaa/Internet-programming.git" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>POS Management System</h3>
              <p>Fruit POS Management System is designed to streamline and manage fruit sales operations efficiently.
                It is a user-friendly system suitable for fruit shops, markets, or grocery stores, offering real-time inventory updates, sales tracking, and customer management.</p>
            </div>
            <footer> <ul className="tech-list"> <li>VueJs</li></ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/rornmakaraaa" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://github.com/rornmakaraaa/Test-Nextjs.git" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>E-commerce shops</h3>
              <p>The Clothing and Footwear POS Management System is designed to meet the needs of apparel and footwear retailers.
                It simplifies sales transactions, inventory tracking, and customer interactions, ensuring a smooth shopping experience and optimized store operations.</p>
            </div>
            <footer> <ul className="tech-list"> <li>NextJs</li></ul> </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}