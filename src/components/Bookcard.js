import React from 'react';
import { CardFooter } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function BookCard({ book }) {
  const { id, volumeInfo } = book || {};
  const { title, authors, genres, imageLinks } = volumeInfo || {};
  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate(`/book/${id}`);
  };

  return (
    <Card className='book-card m-2'>
      <div className="book-content">
        <div className="book-image-container">
          <div variant="top" style={{width:'100px', height:'50px'}} src={imageLinks?.smallThumbnail || 'placeholder-image-url'} alt={title} className='book-image' />
        </div>
        <div className="book-details-container">
          <Card.Body className="book-details">
            <Card.Title className='book-title'>{title || 'Title Not Available'}</Card.Title>
            <Card.Text>
              <p><span className='span-color'>Author:</span> {authors ? authors.join(', ') : 'Author Not Available'}</p>
              <p><span className='span-color'>Genre:</span> {genres ? genres.join(', ') : 'Genre Not Available'}</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer className='book-footer'>
            <Button className='btn-out' size="sm" onClick={handleViewMore}>View More</Button>
          </Card.Footer>
        </div>
      </div>
    </Card>
  );
}

export default BookCard;
