import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import Footer from './components/footer'
import bookService from './assets/bookService.json'
import BookList from './components/bookList'
import AddBook from './components/addBook';

function App() {
  const [books, setBooks] = useState(bookService)
  //console.log(bookService)

  function deleteBook(_id) {
    const updateBooks = books.filter(book => book._id !== _id)
    setBooks(updateBooks);
  }

  function handleLike(_id) {
    const updateBooks = books.map(book => book._id === _id ? { ...book, liked: !book.liked } : book)
    setBooks(updateBooks);
    }
  

  return (
    <>
      <Header />
      <AddBook addBook = {book => setBooks([...books, book])}/>
      <BookList books={books} deleteBook = {deleteBook} handleLike = {handleLike}/>
      <Footer />
    </>
  )
}

export default App
