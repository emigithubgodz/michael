import { useState } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import vid1 from '../assets/videos/Maximizing.mp4';
import MIKE from '../assets/img/MIKE.png';

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleShow = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentVideo(null);
  };

  const projects = {
    videoEditing: [
      { title: 'MAXIMIZING YOUR BRAIN POTENTIAL', src: vid1, description: 'This is Video 1' },
      { title: 'Video 2', src: 'video2.mp4', description: 'This is Video 2' },
      { title: 'Video 3', src: 'video3.mp4', description: 'This is Video 3' }
    ],
    websiteDeveloped: [
      { title: 'Website 1', link: 'https://website1.com', img: MIKE, description: 'This is Website 1' },
      { title: 'Website 2', link: 'https://website2.com', img: MIKE, description: 'This is Website 2' },
      { title: 'Website 3', link: 'https://website3.com', img: MIKE, description: 'This is Website 3' }
    ],
    websiteDesigned: [
      { title: 'Design 1', img: MIKE, description: 'This is Design 1' },
      { title: 'Design 2', img: MIKE, description: 'This is Design 2' },
      { title: 'Design 3', img: MIKE, description: 'This is Design 3' }
    ]
  };

  return (
    <section className="projects" id="projects">
      <Container>
        <h2>Projects</h2>

        <h3>Video Editing</h3>
        <Row>
          {projects.videoEditing.map((project, index) => (
            <Col key={index} xs={12} md={4} className="mb-4">
              <Card className="project-card" onClick={() => handleShow(project.src)}>
                <video className="w-100" muted>
                  <source src={project.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Card>
              <p className="project-title text-center">{project.title}</p>
            </Col>
          ))}
        </Row>

        <Modal show={showModal} onHide={handleClose} centered size="lg" className="custom-modal">
          <Modal.Body className="p-0">
            {currentVideo && (
              <video controls className="w-100">
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Modal.Body>
        </Modal>

        {/* Comment out the following sections */}
        {/* <h3>Website Developed</h3>
        <Row>
          {projects.websiteDeveloped.map((project, index) => (
            <Col key={index} xs={12} md={4} className="mb-4">
              <Card className="project-card">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src={project.img} />
                  <div className="overlay">
                    <Card.Text className="text-white">{project.description}</Card.Text>
                  </div>
                </a>
              </Card>
              <p className="project-title text-center">{project.title}</p>
            </Col>
          ))}
        </Row>

        <h3>Website I Designed</h3>
        <Row>
          {projects.websiteDesigned.map((project, index) => (
            <Col key={index} xs={12} md={4} className="mb-4">
              <Card className="project-card">
                <Card.Img variant="top" src={project.img} />
                <div className="overlay">
                  <Card.Text className="text-white">{project.description}</Card.Text>
                </div>
              </Card>
              <p className="project-title text-center">{project.title}</p>
            </Col>
          ))}
        </Row> */}
      </Container>
    </section>
  );
};
