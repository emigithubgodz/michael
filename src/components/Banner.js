import { useState, useEffect, useCallback, useMemo } from "react";
import { Col, Container, Row} from "react-bootstrap";
import gradpic from '../assets/img/graduatepic.png';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const toRotate = useMemo(() => [
    "Video Editor",
    "Web Developer",
    "Web Designer",
  ], []);

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, toRotate, isDeleting, text, period]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>
              {`Hi! I'm a `}
              <span
                className="txt-rotate"
                dataPeriod="1000"
                data-rotate='["Video Editor", "Web Developer", "Web Designer"]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>Welcome to my portfolio website.</p>
            <p className="about-me">
            I am <span className="highlight">Michael Balajadia</span>, a graduate of Cum Laude under Bachelor of Science 
            in Information Technology with a strong foundation in organization and a reliable, detail-oriented approach to work.
            I am eager to apply my skills, continuously 
            learn, and contribute to a team-oriented environment.
          </p>
         
         
          </Col>
        

          <Col xs={12} md={6} xl={5} className="text-center">
         
          <div class="circle">
          <img src={gradpic} alt="Michael Balajadia" className="banner-img" />
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
