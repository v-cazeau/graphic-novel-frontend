import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import AppLayout from 'src/layout/AppLayout';
// import resets from '../styles/VisualTwo/_resets.module.scss';
import classes from '../styles/VisualTwo/_visualtwo.module.scss';


interface ImageData {
  name: string;
  image: string;
}

const VisualTwo: React.FC = () => {
  const [imageData, setImageData] = useState<ImageData[]>([]);

  useEffect(() => {
    fetch('https://graphic-novel-js-api.web.app/visual-story-two')
      .then(response => response.json())
      .then(data => {
        setImageData(data);
      })
      .catch(error => {
        console.error('Error fetching image data:', error);
      });
  }, []);

  return (
    <AppLayout>
    <section>
    <Container>
        <Row>
            {imageData.map((data, index) => (
            <div key={index} className={classes[data.name]}></div>
            ))}
              <Col sm={12} md={4}> 
                {imageData.length > 0 && (
                <Image src={imageData[6]?.image} className= "miamiL" />
                )}
            </Col>
            <Col sm={12} md={4}>
                {imageData.length > 0 && (
                    <Image src= {imageData[7].image} className= "miamiR" />
                )}
            </Col>
            <Col sm={12} md={4}>
                {imageData.length > 0 && (
                    <Image src= {imageData[8].image} className= "miamiM" />
                )}
            </Col>
        </Row>
        {/* <Row>
            <Col>
                <Container>
                    <Row>
                    <Col sm={12} md={8}>
                        {imageData.length > 0 && (
                        <Image src= {imageData[13].image} className= "sideProfileKhaled" />
                        )}
                    </Col>
                    </Row>
                    <Row>
                    <Col sm={12} md={4}>
                        <div className= "onceUponATime">
                        Once upon a time in the bustling city of Miami, a renowned music producer and DJ named DJ Khaled was riding the waves of success. Known for his catchphrases, infectious beats, and collaborations with A-list musicians, DJ Khaled had conquered the music industry.{' '}
                        <p/>
                        However, deep inside, he felt a yearning for something more—a desire to share his wisdom and inspire young minds. And so, an unexpected twist of fate led DJ Khaled down a new path—a path that led him to become a professor.
                        </div>
                    </Col>
                    </Row>
                </Container>
            </Col>
        </Row> */}
    
    </Container>
    </section>
    </AppLayout>
  );
};

export default VisualTwo;