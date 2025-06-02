import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const BrowseBooks = () => {
  const { category } = useParams(); // from route /books/:category
  const books = useSelector((state) => state.books.books);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter by category if present
  let filteredBooks = category
    ? books.filter(book => book.category.toLowerCase() === category.toLowerCase())
    : books;

  // Filter by search term (title or author)
  if (searchTerm) {
    filteredBooks = filteredBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Browse Books {category && ` - ${category.charAt(0).toUpperCase() + category.slice(1)}`}</h2>

      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px', width: '300px' }}
      />

      <ul>
        {filteredBooks.length === 0 ? (
          <p>No books found.</p>
        ) : (
          filteredBooks.map(book => (
            <li key={book.id} style={{ marginBottom: '10px' }}>
              <strong>{book.title}</strong> by {book.author} — <Link to={`/book/${book.id}`}>View Details</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default BrowseBooks;
