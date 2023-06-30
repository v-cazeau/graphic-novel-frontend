import { Container, Row, Col } from "../../utilis/Bootstrap";

const currentYear: number = new Date().getFullYear();
const url = "https://github.com/v-cazeau/graphic-novel-frontend";

const Footer = () =>{
    return (
        <footer>
            <Container>
                <Row> 
                    <Col>
                        <div className='button-effect footer'> 
                                <a href = {url} 
                                target ="_blank"
                                rel = "noreferrer"
                                className='gh-link'
                                >Code in GitHub</a>
                                <p> &copy;{currentYear} Véronie Cazeau</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;