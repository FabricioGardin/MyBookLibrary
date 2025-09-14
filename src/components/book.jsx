import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

const Book = ({_id, title,category, author, numberInStock, price, publishYear, liked, deleteBook , handleLike}) => {

    return (
        <div className="book">
             <div className="book-item" style={{ display: 'flex', justifyContent: 'space-between',gap: "1rem", padding: '10px', borderBottom: '1px solid #ddd' }}>
                <div style={{ flex: 1, textAlign: 'left' }}>{title}</div>
                <div style={{ flex: 1, textAlign: 'left' }}>{category.name}</div>
                <div style={{ flex: 1, textAlign: 'left' }}>{author}</div>
                <div style={{ flex: 1, textAlign: 'center' }}>{numberInStock}</div>
                <div style={{ flex: 1, textAlign: 'center' }}>$ {price}</div>
                <div style={{ flex: 1, textAlign: 'center' }}>{new Date(publishYear).getFullYear()}</div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                <FaHeart onClick={() => (
                    handleLike(_id)
                )} color={liked ? 'red' : 'gray'}/>
                </div>
                
                <div style={{ flex: 1, textAlign: 'center' }}>
                
                {/* <button className='btn btn-danger' onClick={() => deleteBook(_id)}> Delete </button> */}
                    <FaTrash color='red' onClick={() => deleteBook(_id)}/>
                </div>
            </div>    

        </div>
      );
}
 
export default Book;