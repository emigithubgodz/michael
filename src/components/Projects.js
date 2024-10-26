
import { Container, Row, Col, Card } from 'react-bootstrap';
import migradeVid from '../assets/videos/migrade.mp4';
import skinfullyYoursVid from '../assets/videos/Skinfully Yours.mp4';
import pythonImg from '../assets/img/python.png'; 
import djangoImg from '../assets/img/django-icon.svg';
import htmlImg from '../assets/img/html.png';
import cssImg from '../assets/img/css.png';
import jsImg from '../assets/img/js.png';
import phpImg from '../assets/img/php.png';

export const Projects = () => {
  const projects = [
    {
      title: 'Migrade',
      link: 'https://migrade.com',
      videoSrc: migradeVid,
      description: 'A website developed using Django, Python, CSS, HTML, and JavaScript.',
      technologies: [pythonImg, djangoImg, htmlImg, cssImg, jsImg]
    },
    {
      title: 'Skinfully Yours',
      link: 'https://skinfullyyours.com',
      videoSrc: skinfullyYoursVid,
      description: 'A website developed using HTML, CSS, JavaScript, and PHP.',
      technologies: [htmlImg, cssImg, jsImg, phpImg]
    }
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <h2>Projects</h2>

        
        <Row>
          {projects.map((project, index) => (
            <Col key={index} xs={12} md={6} className="mb-4">
              <Card className="project-card">
                <div className="video-container">
                  <video
                    className="w-100"
                    muted
                    loop
                    autoPlay={false} // Ensure it doesn't auto play on load
                    onMouseEnter={(e) => {
                      e.currentTarget.play(); // Play video on hover
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause(); // Pause video when not hovering
                      e.currentTarget.currentTime = 0; // Reset video to start
                    }}
                  >
                    <source src={project.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="card-body">
                  <h5 className="project-title text-center">{project.title}</h5>
                  <div className="technology-icons text-center">
                    {project.technologies.map((techImg, techIndex) => (
                      <img key={techIndex} src={techImg} alt="Technology" className="technology-icon" />
                    ))}
                  </div>
                  <p className="project-description text-center">{project.description}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
