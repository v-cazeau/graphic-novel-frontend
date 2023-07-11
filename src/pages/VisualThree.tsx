import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from '../utilis/Bootstrap';
import AppLayout from 'src/layout/AppLayout';



interface ImageData {
    name: string;
    image: string;
  }

const VisualThree: React.FC = () => {
    const [imageData, setImageData] = useState<ImageData[]>([]);
  
    useEffect(() => {
      fetch('https://graphic-novel-js-api.web.app/visual-story-three')
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
                        <h2 style={{ color: 'white', textAlign: 'center' }}>Harmony in the Holograms: The Futuristic Phantom of the Opera</h2>
                    <Row>
                        <Col sm={12} md={12} lg={4}>
                            {imageData.length > 0 && (
                                <Image src={imageData[5]?.image} 
                                    className= "neo-city" />
                                )}
                        </Col>
                        <Col sm={12} md={12} lg={4}>
                            <p className='text'>
                                Once upon a time in the distant future, in the bustling metropolis of Neo-City, a completely random and unexpected phenomenon occurred. Neo-City was known for its advanced technology, towering skyscrapers, and the harmonious blending of humans and androids in everyday life. People were always on the lookout for the next exciting innovation, but no one could have predicted the appearance of the enigmatic figure known as the "Futuristic Phantom of the Opera."
                            <p/>
                                The Phantom, as they came to be called, first emerged during the grand opening of the most advanced opera house ever built, the Neo-Opera. As the curtains rose, the audience was captivated by the extraordinary holographic performances and the mesmerizing symphony of music. But suddenly, a figure dressed in a sleek black cloak and a mysterious silver mask appeared, taking center stage.
                            </p>
                        </Col>
                        <Col sm={12} md={12} lg={4}>
                            {imageData.length > 0 && (
                                <Image src={imageData[1]?.image} 
                                    className= "h-and-a" />
                                )}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='text'>
                                The Phantom possessed a voice that resonated through the theater, captivating everyone in attendance. Their vocal range was unlike anything ever heard before, seamlessly transitioning between ethereal falsettos and powerful bass notes. The audience was spellbound, and despite the initial shock, they couldn't help but be drawn into the Phantom's mesmerizing performance.    
                            <p/>
                                Word of the Futuristic Phantom quickly spread throughout the city, and Neo-City became abuzz with curiosity and speculation. Who was this extraordinary figure? Was the Phantom human or android? People began sharing stories and rumors, creating an air of excitement and anticipation for the next appearance.

                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12} lg={4}>
                                <Row>
                                <Col >
                                    {imageData.length > 0 && (
                                        <Image src={imageData[6]?.image} 
                                        className= "opera-crowd" />
                                    )}
                                </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className='text' style={{ marginTop: '50%' }}>
                                            As the Phantom's fame grew, they became a symbol of mystery and inspiration for the people of Neo-City. Some believed the Phantom was an android prototype with an unmatched vocal capability, created by a secret government agency. Others thought the Phantom was a time-traveler from the past, using advanced disguises to hide their true identity. The city was captivated by the endless possibilities and intrigued by the unknown.
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {imageData.length > 0 && (
                                            <Image src={imageData[0]?.image} 
                                            className= "ceo" />
                                        )}
                                    </Col>
                                </Row>
                        </Col>

                        <Col sm={12} md={12} lg={4}>
                            <Row>
                                <Col>
                                    <p className='text'>
                                        Each subsequent performance by the Phantom was met with packed crowds, eager to witness the captivating spectacle. The Neo-Opera quickly became the hottest ticket in town, with people lining up for hours to catch a glimpse of the enigmatic figure. The Phantom's performances transcended traditional boundaries, incorporating elements of holography, light shows, and futuristic technology. It was an otherworldly experience that left the audience awestruck and craving for more.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {imageData.length > 0 && (
                                        <Image src={imageData[8]?.image} 
                                            className= "opera-outside" />
                                    )}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className='text'>
                                        However, not everyone was enamored by the Phantom's allure. The CEO of a powerful technology corporation, known for their android manufacturing, saw the Phantom as a threat to their business. Determined to uncover the truth behind the Phantom's identity, the CEO employed a team of investigators to track them down.
                                    <p/>
                                        Unbeknownst to the investigators, the Phantom had their own agenda. They believed that the power of music and art could bridge the gap between humans and androids, fostering understanding and empathy. The Phantom's performances were their way of spreading this message, using their extraordinary talents to touch the hearts and souls of the city's inhabitants.
                                    </p>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} md={12} lg={4}>
                            <Row>
                                    {imageData.length > 0 && (
                                        <Image src={imageData[4]?.image} 
                                            className= "neo-city-t" />
                                    )}
                            </Row>
                            <Row>
                                    {imageData.length > 0 && (
                                        <Image src={imageData[3]?.image} 
                                            className= "neo-city-m" />
                                    )}
                            </Row>
                            <Row>
                                    {imageData.length > 0 && (
                                        <Image src={imageData[2]?.image} 
                                            className= "neo-city-b" />
                                    )}
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Container>
                                <Row>
                                    <Col>
                                        <p className='text'>
                                            In a thrilling turn of events, the investigators finally managed to corner the Phantom in their hidden lair. As they confronted the figure, the Phantom removed their mask, revealing a face that defied categorization. It was a blend of human and android, a visual representation of the unity the Phantom had been striving to achieve.
                                        <p/>
                                            Rather than feeling threatened or defeated, the investigators were moved by the Phantom's message. They realized the potential for a world where humans and androids coexisted in harmony. The CEO, in a moment of revelation, pledged to support the Phantom's cause and use their company's resources to advocate for equality and understanding.
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {imageData.length > 0 && (
                                            <Image src={imageData[10]?.image} 
                                                className= "secret-lair" />
                                        )}
                                    </Col>
                                    <Col>
                                        {imageData.length > 0 && (
                                            <Image src={imageData[9]?.image} 
                                                className= "phantom-face" />
                                        )}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className='text'>
                                            And so, the Futuristic Phantom of the Opera's legacy continued, transcending the boundaries of music and technology. Their performances became a symbol of unity, reminding the people of Neo-City that despite their differences, they were a harmonious melody.
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        </AppLayout>
    )
}

export default VisualThree;