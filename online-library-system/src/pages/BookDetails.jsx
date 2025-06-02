import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.books);

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Book not found.</h2>
        <Link to="/books">Back to Browse</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <button onClick={() => navigate('/books')}>Back to Browse</button>
    </div>
  );
};

export default BookDetails;
