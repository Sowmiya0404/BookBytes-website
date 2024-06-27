import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/Card';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

function Categories() {
  const [fictionBooks, setFictionBooks] = useState([]);
  const [nonFictionBooks, setNonFictionBooks] = useState([]);
  const [historicalBooks, setHistoricalBooks] = useState([]);
  const [fantasyStories, setFantasyStories] = useState([]);
  const [horrorBooks, setHorror] = useState([]);

  useEffect(() => {
    // Fetch Fiction Books
    axios.get('https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=4')
      .then(res => setFictionBooks(res.data.items))
      .catch(error => console.error('Error fetching fiction books:', error));

    // Fetch Non-Fiction Books
    axios.get('https://www.googleapis.com/books/v1/volumes?q=nonfiction&maxResults=4')
      .then(res => setNonFictionBooks(res.data.items))
      .catch(error => console.error('Error fetching non-fiction books:', error));
    
      axios.get('https://www.googleapis.com/books/v1/volumes?q=historical&maxResults=4')
      .then(res => setHistoricalBooks(res.data.items))
      .catch(error => console.error('Error fetching non-fiction books:', error));

      axios.get('https://www.googleapis.com/books/v1/volumes?q=fantasy&maxResults=4')
      .then(res => setFantasyStories(res.data.items))
      .catch(error => console.error('Error fetching non-fiction books:', error));

      axios.get('https://www.googleapis.com/books/v1/volumes?q=horror&maxResults=4')
      .then(res => setHorror(res.data.items))
      .catch(error => console.error('Error fetching non-fiction books:', error));
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
          <h2 className='p-2'>Fiction Books</h2>
          <Row>
            {renderBooks(fictionBooks)}
          </Row>
        </div>
       
        <div>
          <h2 className='p-2 m-2'>Non Fiction Books</h2>
          <Row>
            {renderBooks(nonFictionBooks)}
          </Row>
        </div>

        <div>
          <h2 className='p-2 m-2'>Historical Books</h2>
          <Row>
            {renderBooks(historicalBooks)}
          </Row>
        </div>
        <div>
          <h2 className='p-2 m-2'>Fantasy Stories </h2>
          <Row>
            {renderBooks(fantasyStories)}
          </Row>
        </div>
        <div>
          <h2 className='p-2 m-2'>Horror Books</h2>
          <Row>
            {renderBooks(horrorBooks)}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Categories;
