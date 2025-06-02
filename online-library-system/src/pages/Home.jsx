import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';


const categories = ['fiction', 'non-fiction', 'sci-fi', 'biography'];

const Home = () => {
  const books = useSelector((state) => state.books.books);

  // Sort books by rating descending and get top 3 popular
  const popularBooks = [...books].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <>
      <NavBar />
      <div style={{ padding: '20px' }}>
        <h1>Welcome to the Online Library System</h1>

        <h3>Book Categories</h3>
        <ul>
          {categories.map(cat => (
            <li key={cat}>
              <Link to={`/books/${cat}`}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Link>
            </li>
          ))}
        </ul>

        <h3>Popular Books</h3>
        <ul>
          {popularBooks.map(book => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author} — <Link to={`/book/${book.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
