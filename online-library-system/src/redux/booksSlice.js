import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: '1984', author: 'George Orwell', category: 'fiction', description: 'Dystopian novel', rating: 4.8 },
    { id: 2, title: 'Dune', author: 'Frank Herbert', category: 'sci-fi', description: 'Epic space story', rating: 4.7 },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
