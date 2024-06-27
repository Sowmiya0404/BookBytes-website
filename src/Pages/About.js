import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../assets/images/About.png';

function About() {
  return (
    <div>
      <h2 className='m-4 text-center '>About BookByte</h2>
      <Container className='about'>
        <Row>
          <Col lg={5} md={4} sm={12}>
            <img src={about} alt='About ' width={'100%'} height={'100%'}/>
          </Col>
          <Col lg={7} md={8} sm={12}>
            <p>
              Welcome to BookByte, your go-to destination for exploring and discovering a vast collection of books. Our website leverages the power of the Google Books API to provide you with detailed information about a wide range of books across various genres.
</p><p>
              Whether you're an avid reader, a student, or someone looking for your next favorite read, BookByte is here to assist you. Search for books, explore their details, and make informed decisions about what to read next.
</p><p>
             <h5> Features:</h5>
             
                <ul> - Browse an extensive library of books</ul>
                <ul> - Find your favorite books and discover new oness</ul>
                <ul>- Find your favorite books and discover new ones</ul>
           
             
             

              BookByte is designed to make your book exploration journey seamless and enjoyable.<br/><br/><br/>
                <h3 className='text-center'> Happy reading!</h3>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
