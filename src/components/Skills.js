import { Container, Col, Row } from "react-bootstrap";
import htmlLogo from "../assets/img/html.png";
import cssLogo from "../assets/img/css.png";
import jsLogo from "../assets/img/js.png";
import reactLogo from "../assets/img/react.png";
import nodejsLogo from "../assets/img/springboot.png";
import gitLogo from "../assets/img/git.png";
import sqlLogo from "../assets/img/sql.jpg";

export const Skills = () => {
  const skills = [
    { logo: htmlLogo, name: "HTML" },
    { logo: cssLogo, name: "CSS" },
    { logo: jsLogo, name: "JavaScript" },
    { logo: reactLogo, name: "React" },
    { logo: nodejsLogo, name: "Springboot" },
    { logo: gitLogo, name: "Git" },
    { logo: sqlLogo, name: "SQL" },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
