import { Container, Row, Col, Image } from "../utilis/Bootstrap";
import { useEffect, useState } from "react";
import AppLayout from "../layout/AppLayout";

interface ImageData {
  _id: string;
  name: string;
  image: string;
}

const VisualOne = () => {
  const [imageData, setImageData] = useState<ImageData[]>([]);

  useEffect(() => {
    fetch("https://graphic-novel-js-api.web.app/visual-story-one")
      .then((response) => response.json())
      .then((data) => {
        setImageData(data);
      })
      .catch((error) => {
        console.error("Error fetching image data:", error);
      });
  }, []);

  return (
    <AppLayout>
      <section>
        <Container fluid className="visual-board">
          <h2 style={{ color: "white", textAlign: "center" }}>
            I Beg Your Pardon
          </h2>
          <Row className="g-0">
            <Col lg={12}>
              {imageData.length > 0 && <Image src={imageData[6]?.image} />}
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={7}>
              <Container className="vn1-images">
                <Row className="g-0">
                  <Col lg={12}>
                    {imageData.length > 0 && (
                      <Image src={imageData[5]?.image} />
                    )}
                  </Col>
                </Row>

                <Row className="g-0">
                  <Col lg={12}>
                    {imageData.length > 0 && (
                      <Image src={imageData[4]?.image} />
                    )}
                  </Col>
                </Row>

                {/* <Row className="g-0">
                  <Col lg={12}>
                    {imageData.length > 0 && (
                      <Image src={imageData[3]?.image} />
                    )}
                  </Col>
                </Row> */}

                <Row className="g-0">
                  <Col lg={12}>
                    {imageData.length > 0 && (
                      <Image src={imageData[2]?.image} />
                    )}
                  </Col>
                  <Col lg={12}>
                    {imageData.length > 0 && (
                      <Image src={imageData[1]?.image} />
                    )}
                  </Col>
                </Row>

                <Row className="g-0">
                  <Col>
                    {imageData.length > 0 && (
                      <Image src={imageData[0]?.image} />
                    )}
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="vn1-caption">
            <Col>
              <p>
                I beg your pardon.
                <br />
                Could you repeat what you just said?
                <br />I beg your pardon.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </AppLayout>
  );
};

export default VisualOne;
