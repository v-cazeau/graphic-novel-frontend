import { Container, Row, Col } from '../utilis/Bootstrap'
import AppLayout from '../layout/AppLayout';

const Hompage = () => {

    return(
        <AppLayout>
        <section>
        <Container fluid className= 'homepage'>
            <Row className="g-0">
                <Col lg={12}>
                  <div className='homepage-text'>
                    <h1>Quirky Chronicles:</h1>
                    <h2>A Kaleidoscope of Visual Stories</h2>
                  </div>
                </Col>
            </Row>
        </Container>
        </section>
        </AppLayout>
    )
}

export default Hompage;