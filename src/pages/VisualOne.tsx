import { Container, Row, Col, Image } from '../utilis/Bootstrap'
import AppLayout from '../layout/AppLayout';

const Hompage = () => {

    const imageUri = process.env.PUBLIC_URL + '/images/VN1';

    return(
        <AppLayout>
        <section>
        <Container fluid className= "visual-board">

            <Row className="g-0">
                <Col lg={12}>
                <Image src= { imageUri + "/look.webp"}/>
                </Col>
            </Row>
            <Row className="justify-content-center">
            <Col lg={7}>
            <Container className= "vn1-images">
              <Row className="g-0">
                <Col lg={12}><Image src={imageUri + "/hello-name.webp"} /></Col>
              </Row>

              <Row className="g-0">
                <Col lg={12}><Image src={imageUri + "/uhm.webp"} /></Col>
              <Row>

              </Row>
                <Col lg={12}><Image src={imageUri + "/please-four.webp"} /></Col>
              </Row>

              <Row className="g-0">
                <Col lg={12}><Image src={imageUri + "/please-three.webp"} /></Col>
                <Col lg={12}><Image src={imageUri + "/please-two.webp"} /></Col>
              </Row>

              <Row className="g-0">
                <Col>
                  <Image src={imageUri + "/please-one.webp"} />
                </Col>
              </Row>
            </Container>            
            </Col>
            </Row>
            <Row className= "vn1-caption">
                <Col>
                <p>I beg your pardon.
                    <br/>
                    Could you repeat what you just said? 
                    <br/>
                    I beg your pardon.
                </p>
                </Col>
            </Row>

        </Container>
        </section>
        </AppLayout>
    )
}

export default Hompage;