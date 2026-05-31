import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function BookList() {
    const [books, setBooks]=useState([]);
    function getBooks(){
        axios.get("https://worksheet-library.mashupstack.com/books")
             .then(response=>{
               setBooks(response.data)
            })
             .catch(error => {
               console.log(error);
            });

    };
    useEffect(()=>{
        getBooks()
    },[]);

    function deleteBook(id) {
        axios.delete("https://worksheet-library.mashupstack.com/books/"+id)
        .then(response=>{
            alert(response.data.message)
            
        })
        .catch(error => {
               console.log(error);
            });
        };
        
    return (
        <div>
           <h2>Book List</h2>

        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Year</th>
                    <th>Genre</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.published_year}</td>
                        <td>{book.genre}</td>
                        <td>
                            <Link to={"/edit/"+book.id} className="btn btn-primary btn-sm">Edit</Link>

                            <button className="btn btn-primary btn-sm ms-2" onClick={() => deleteBook(book.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default BookList;