import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from '../utilis/Bootstrap';
import AppLayout from 'src/layout/AppLayout';


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
    <Container fluid>
        <Row>
          <Col><h2 style={{ color: 'white', textAlign: 'center' }}>From Beats to Books: DJ Khaled's Academic Encore</h2></Col>
        </Row>     
        <Row className="g-0">
              <Col sm={12} md={4}> 
                {imageData.length > 0 && (
                <Image fluid src={imageData[6]?.image} className= "miamiL" />
                )}
            </Col>
            <Col sm={12} md={4}>
                {imageData.length > 0 && (
                    <Image fluid  src= {imageData[7].image} className= "miamiR" />
                )}
            </Col>
            <Col sm={12} md={4}>
                {imageData.length > 0 && (
                    <Image fluid src= {imageData[8].image} className= "miamiM" />
                )}
            </Col>
        </Row>
        
        <Row className="g-0">
          <Col md={6} lg={7}>
            <Container fluid>
              <Row className="g-0">
                <Col lg={12}>
                  {imageData.length > 0 && (
                    <Image src= {imageData[13].image} className= "sideProfileKhaled" />
                  )}
                  </Col>
              </Row>

              <Row >
                <Col lg={12}>
                    <p className= "onceUponATime textBlock2">
                          Once upon a time in the bustling city of Miami, a renowned music producer and DJ named DJ Khaled was riding the waves of success. Known for his catchphrases, infectious beats, and collaborations with A-list musicians, DJ Khaled had conquered the music industry.
                        <p/>
                          However, deep inside, he felt a yearning for something more—a desire to share his wisdom and inspire young minds. And so, an unexpected twist of fate led DJ Khaled down a new path—a path that led him to become a professor.
                    </p>
                  </Col>
              </Row>

              <Row >
                <Col md={6} lg={6}>
                  {imageData.length > 0 && (
                    <Image src= {imageData[11].image} 
                      className= "image13" />)}
                </Col>
                <Col md={6} lg={6}>
                  {imageData.length > 0 && (
                    <Image src= {imageData[1].image} 
                      className="image14" />
                      )}
                  </Col>
              </Row>
            </Container>            
          </Col>

          <Col md={6} lg={5}>
              <Row>
                {imageData.length > 0 && (
                  <Image src= {imageData[5].image} className="khaledWChain" />
                )}
              </Row>
              <Row>
              <p className="oneDayP textBlock">
                One day, DJ Khaled received an invitation from a prestigious university. The invitation was from the dean of the School of Arts and Entertainment, who had heard about DJ Khaled's unmatched talent and his unique ability to motivate and uplift others. The dean saw an opportunity to bring DJ Khaled's charismatic energy and knowledge to the academic world. Intrigued by the invitation, DJ Khaled decided to meet with the dean. They sat down in the dean's office, surrounded by shelves filled with books on art, music, and philosophy. The dean explained the vision for a new course that would blend music, creativity, and entrepreneurship. It would be a course like no other—a course that would inspire students to pursue their passions and manifest their dreams.
              </p>
              </Row>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={8}>
              <Row>
                <Col>
                  {imageData.length > 0 && (
                      <Image src= {imageData[4].image} 
                        className="speechKhaled" />
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className= "theConceptP">
                  The concept fascinated DJ Khaled, and he knew deep down that this was an opportunity he couldn't pass up. He envisioned a class where he could not only teach about music production but also mentor aspiring artists and entrepreneurs, passing down the wisdom he had gained throughout his career.
                  </p>
                </Col>
              </Row>          
          </Col>
          <Col sm={12} md={4}>
            <Container>
              <Row>
                <Col>
                  {imageData.length > 0 && (
                    <Image src= {imageData[9].image} 
                      className="orangeKhaled" />
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="excitedAboutP textBlock3">
                    Excited about the possibilities, DJ Khaled accepted the invitation and began his journey as Professor Khaled. He spent countless hours crafting lesson plans, designing engaging activities, and curating a syllabus that would empower his students to reach their full potential.
                  <p/>
                    On the first day of class, a diverse group of students walked into the lecture hall, unsure of what to expect. They found themselves face-to-face with DJ Khaled, who stood at the front of the room, radiating positivity and confidence. The energy in the room was palpable.
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={6}>
            {imageData.length > 0 && (
              <Image src= {imageData[14].image} 
                className="studentHall" />
            )}
          </Col>
          <Col sm={12} md={6}>
            {imageData.length > 0 && (
              <Image src= {imageData[10].image} 
                className="professorK" />
            )}
          </Col>
        </Row>
        
        <Row>
          <Col sm= {12} md={7}>
            <p className= "professorKhaledKickedOffP textBlock7" >
              Professor Khaled kicked off the semester with an electrifying speech, sharing stories from his own life,
              emphasizing the importance of hard work, perseverance, and staying true to oneself. He used his catchphrases
              to inspire his students, repeating phrases like "Another one!" and "Major key alert!" to
              drive home important lessons about resilience and the pursuit of success.
            <p/>
              As the weeks went by, Professor Khaled guided his students through the intricacies of music production, entrepreneurship, and personal development. He invited guest speakers from the industry, organized hands-on workshops, and encouraged his students to collaborate and create their own music projects.
            </p>
          </Col>
          <Col sm={12} md={5}>
            {imageData.length > 0 && (
              <Image src= {imageData[2].image} 
                className="goldenKhaled" />
            )}
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={6}>
            {imageData.length > 0 && (
              <Image src= {imageData[12].image} 
                className="redKhaled" />
            )}
          </Col>
          <Col sm={12} md={6}>
            <p className= "professorKhaled textBlock15" >
              Professor Khaled's infectious enthusiasm and genuine passion for his craft transformed the classroom into a hub of creativity and inspiration. He pushed his students to think outside the box, to embrace failure as a stepping stone to success, and to believe in their own unique abilities.
            <p/>
              Word of Professor Khaled's transformative teaching spread throughout the university and beyond. Students from other disciplines flocked to his classes, eager to experience the electrifying atmosphere he had cultivated. His lectures became legendary, often filled with surprise appearances from famous musicians and industry insiders, who recognized the value of Professor Khaled's teachings.
            </p>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={6}>
            {imageData.length > 0 && (
              <Image src= {imageData[3].image} 
                className= "graduatingStudents" />
            )}
          </Col>
          <Col sm={12} md={6}>
            {imageData.length > 0 && (
              <Image src= {imageData[0].image} 
                className= "blueKhaled" />
            )}
            </Col>
        </Row>
        
        <Row>
          <Col >
          <p className= "yearPassedP textBlock12">
            Years passed, and Professor Khaled's impact extended far beyond the confines of the classroom. Many of his students went on to achieve great success in the music industry, launching their own careers and attributing their accomplishments to the wisdom and guidance they had received from their beloved professor.
          <p/>
            Professor Khaled's journey from DJ to professor was a testament to the power of passion, perseverance, and the ability to inspire others. He had found a new purpose in life, one that allowed him to touch the lives of countless individuals and leave an indelible mark on their hearts and minds.
          </p>
          </Col>
        </Row>
    
    </Container>
    </section>
    </AppLayout>
  );
};

export default VisualTwo;