import { useState } from "react";

const AddBook = ({addBook}) => {
    const [book, setBook] = useState({
        title: " ", author:"", category: "",  numberInStock: "", price: "", publishYear: "", liked: false
    });
    const handleChange = (e) => { setBook({ ...book, [e.target.name]: e.target.value });  };
    const handleSubmit = (e) => { e.preventDefault();
        if (!book.title || !book.author || !book.category || !book.numberInStock || !book.price || !book.publishYear) {
            alert("Please fill in all required fields!");
            return;
        }   
    addBook({...book,_id: Date.now().toString(), liked: false});
    setBook({title: "", author: "", category: "", numberInStock: "", price: "", publishYear: "", liked: false});
    }

    return ( 
        <div className="add-book">
            <h2 style={{color:"blue"}}> Add New Book</h2>
            <form style={{ display: 'flex',flexDirection: 'column', alignItems: 'center',  gap: '10px',  padding: '20px',
                backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',  }} onSubmit={handleSubmit}> 
                <input type="text" name="title" placeholder="Title" value={book.title} onChange={handleChange} required />
                <input type="text" name="category" placeholder="Category" value={book.category} onChange={handleChange} required />
                <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleChange} required />
                <input type="text" name="numberInStock" placeholder="Number in Stock" value={book.numberInStock} onChange={handleChange} required />
                <input type="text" name="price" placeholder="Price" value={book.price} onChange={handleChange} required />
                <input type="text" name="publishYear" placeholder="Publish Year" value={book.publishYear} onChange={handleChange} required />
                <button type="submit">Add Book</button>
            </form>
        </div>
     );
}
 export default AddBook;