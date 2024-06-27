import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoMdArrowRoundBack } from "react-icons/io";

function BookDetail() {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(res => setBookDetails(res.data.volumeInfo))
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Container style={{marginTop:'30px'}} className='d-flex align-items-center justify-content-center '>
      <div className="p-2 bookdet" style={{maxWidth:'1000px' }}>
        <button className="btn-color" style={{fontSize:'20px', borderRadius:'50%'}} onClick={handleBack}><IoMdArrowRoundBack /></button>
      <h1 className='text-center'>{bookDetails.title}</h1>
      <div className="text-center " >
      <img src={bookDetails.imageLinks?.thumbnail} alt="Thumbnail" width={"200px"} /></div>
      <Container>
        <Row>
        <Col md={12} className='py-2 about'>
      <p className='p-2'><b>Description:</b> {bookDetails.description || 'N/A'}</p>
      </Col>
      <Col md={6}>
      <p><b>Subtitle:</b> {bookDetails.subtitle || '"Exploring Worlds Through Pages"'}</p>
      </Col>
      <Col md={6}>
      <p><b>Authors:</b> {bookDetails.authors ? bookDetails.authors.join(', ') : 'N/A'}</p>
      </Col>
      <Col md={6}>
      <p><b>Genres:</b> {bookDetails.categories ? bookDetails.categories.join(', ') : 'N/A'}</p>
      </Col>
      <Col md={6}>
      <p><b>Ratings:</b> {bookDetails.averageRating || '4.5'}</p>
      </Col>
      <Col md={6}>
      <p><b>Edition:</b> {bookDetails.edition || '5'}</p>
      </Col>
      <Col md={6}>
      <p><b>Price: </b>{bookDetails.saleInfo?.listPrice?.amount || '$200'}</p>
      </Col>
      <Col md={6}>
      <p><b>Publisher:</b> {bookDetails.publisher || '$200'}</p>
      </Col>
      <Col md={6}>
      <p><b>Publish Date:</b> {bookDetails.publishedDate || 'N/A'}</p>
      </Col>
      
      </Row>
      </Container>
      <div className='d-flex align-items-center justify-content-center'>
    


      </div>
    
      </div>
      </Container>
    </div>

  );
}

export default BookDetail;
