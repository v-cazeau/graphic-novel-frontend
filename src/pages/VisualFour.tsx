import { Container, Row, Col } from '../utilis/Bootstrap';
import AppLayout from 'src/layout/AppLayout';

const VisualFour = () => {
    return (
        <AppLayout>
            <section>
            <Container>
            <h2 style={{ color: 'white', textAlign: 'center' }}>Futuristic Harmony: Nature and Software Engineering</h2>
                <Row>
                    <Col className='robo'>
                        <iframe 
                            width="328" 
                            height="583" 
                            src="https://www.youtube.com/embed/FQim7RRinz8" 
                            title="Robo-Organics" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen></iframe>
                    </Col>
                    <Col className='flora'>
                        <iframe 
                            width="328"
                            height="583" 
                            src="https://www.youtube.com/embed/LTLToKkSfN8" 
                            title="Tomorrow&#39;s Flora" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen></iframe>
                    </Col>
                    <Col className='tech-ture'>
                        <iframe 
                            width="328" 
                            height="583" 
                            src="https://www.youtube.com/embed/7C11vifHAKk" 
                            title="Tech-ture" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen></iframe>
                    </Col>
                </Row>
                <Row>
                    <Col className='tech-garden'>
                        <iframe 
                            width="328" 
                            height="583" 
                            src="https://www.youtube.com/embed/zaSr7ZeD_dw" 
                            title="Tech Garden" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen></iframe>
                    </Col>
                </Row>
            </Container>
            </section>
        </AppLayout>
    )
}

export default VisualFour;