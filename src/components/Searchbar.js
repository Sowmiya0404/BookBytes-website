import React, { useState , useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Row,Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import BookCard from './Card';
import Trending from './Trending';

function Searchbar() {
  const [search, setSearch] = useState(""); 
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchBook = () => {
    setLoading(true);
    setError(null);
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAX8QcZI5ZTmoU-AnCwrjlBGZ48Ivwz_wA`)
      .then(res => {
        console.log(res.data);
        const items = res.data.items || [];
        if (items.length > 0) {
          setSearchResults(items);
        } else {
          setSearchResults([]);
          setError("No results found");
        }

        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError("Error fetching data");
        setLoading(false);
      });
  };

 
  return (
    <>
      <div className='searchbg d-flex align-items-center justify-content-center'>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search your favourite books"
                className="mr-sm-2 w-100 border focus-ring focus-ring-dark"
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && searchBook()} 
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" onClick={searchBook} className='btn-out'>Search</Button>
            </Col>
          </Row>
        </Form>
      </div>
      <Container className='d-flex justify-content-center align-items-center'>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Row className=''>
          {searchResults.map((book, index) => (
            <Col md={4} className='' key={index}>
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
      </Container>
      <Trending />
    </>
  );
}

export default Searchbar;
