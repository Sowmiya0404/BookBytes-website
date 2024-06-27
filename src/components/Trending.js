import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/Card';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

function Trending() {
  const [trendingBooks, setTrendingBooks] = useState([]);
  
  useEffect(() => {
  
    axios.get('https://www.googleapis.com/books/v1/volumes?q=trending&maxResults=4')
      .then(res => setTrendingBooks(res.data.items))
      .catch(error => console.error('Error fetching trending books:', error));
  }, []);

  function renderBooks(books) {
    return books.map((book, index) => (
      <Col key={index} className='' lg={3} md={4} sm={6} xs={12}>
        <BookCard book={book} />
      </Col>
    ));
  }

  return (
    <div>
      <Container>
        <div>
          <h2 className='p-2'>Trending Books</h2>
          <Row>
            {renderBooks(trendingBooks)}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Trending;
