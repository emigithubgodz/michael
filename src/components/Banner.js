import { useState, useEffect, useCallback, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";

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
              I'm <span className="highlight">Michael Balajadia</span>, an aspiring candidate for roles in web designing, web development, or digital marketing. 
              I offer a strong foundation in organization and dependability. I am adept at managing multiple 
              priorities with a positive attitude and am eager to take on additional responsibilities to contribute 
              to the team's success.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
