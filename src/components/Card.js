import React from 'react';
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
    <Card className='book-card m-2 p-2'>
      <Card.Img variant="top" src={imageLinks?.smallThumbnail || 'placeholder-image-url'} alt={title} className='book-image' />
      <Card.Body>
        <Card.Title className='book-title'>{title || 'Title Not Available'}</Card.Title>
        <Card.Text className='book-details'>
          <p><span className='span-color'>Author:</span> {authors ? authors.join(', ') : 'Author Not Available'}</p>
       
        </Card.Text>
        <div className='card-footer'>
        <Button className='btn-out w-100' size="sm" onClick={handleViewMore}>View More</Button>
      </div>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
