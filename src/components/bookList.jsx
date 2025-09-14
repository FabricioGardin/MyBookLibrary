import Book from "./book";
const BookList = ({books, deleteBook, handleLike}) => {

    if(books.length === 0) {
        return <h1 style={{color: "red", fontWeight: "bold"}} >No Books</h1>
    }
    return (  
        <div>
            <h2 style={{color:"blue"}}>Book List : Showing {books.length} books</h2>
            <div className="book-header" style={{ display: 'flex', fontWeight: 'bold',  padding: '10px' }}>
                <div style={{ flex: 1, textAlign: 'left' }}>Title</div>
                <div style={{ flex: 1, textAlign: 'left' }}>Category</div>
                <div style={{ flex: 1, textAlign: 'left' }}>Author</div>
                <div style={{ flex: 1, textAlign: 'center' }}>Stock</div>
                <div style={{ flex: 1, textAlign: 'center' }}>Price</div>
                <div style={{ flex: 1, textAlign: 'center' }}>Year</div>
                <div style={{ flex: 1, textAlign: 'center' }}>Liked</div>
                <div style={{ flex: 1, textAlign: 'center' }}>Actions</div>
            </div>
            <div className="book-list">
                { books.map(book => (
                    <Book key= {book._id} {...book} deleteBook = {deleteBook} handleLike = {handleLike}/>)
                    )}
            </div>    
            
        </div>
    );
}
 
export default BookList;
