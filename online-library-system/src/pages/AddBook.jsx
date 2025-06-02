import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.author || !form.category || !form.description || !form.rating) {
      setError('Please fill in all fields.');
      return;
    }

    const newBook = {
      id: Date.now(),
      title: form.title,
      author: form.author,
      category: form.category.toLowerCase(),
      description: form.description,
      rating: parseFloat(form.rating),
    };

    dispatch(addBook(newBook));
    navigate('/books');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add a New Book</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} /><br /><br />
        <input type="text" name="author" placeholder="Author" value={form.author} onChange={handleChange} /><br /><br />
        <input type="text" name="category" placeholder="Category" value={form.category} onChange={handleChange} /><br /><br />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} /><br /><br />
        <input type="number" step="0.1" name="rating" placeholder="Rating (e.g. 4.5)" value={form.rating} onChange={handleChange} /><br /><br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
