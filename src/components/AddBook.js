import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [published_year, setPublishedYear] = useState("");
    const [genre, setGenre] = useState("");

    var navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("https://worksheet-library.mashupstack.com/books",{
            title,
            author,
            published_year,
            genre,
        })
        .then(()=>{
            alert("Book Added Successfully");
            navigate('/');
        })
        .catch(error => {
               console.log(error);
        });
    };

    return (
    <div>
        <h2>Add Book</h2>
        <div className="container">
                    
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Title:</label>
                        <input  
                        className="form-control" 
                        value={title} 
                        onChange={(event)=>{setTitle(event.target.value)}}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Author:</label>
                        <input 
                        className="form-control" 
                        value={author} 
                        onChange={(event)=>{setAuthor(event.target.value)}}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Published Year:</label>
                        <input 
                        className="form-control" 
                        value={published_year} 
                        onChange={(event)=>{setPublishedYear(event.target.value)}}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Genre:</label>
                        <input 
                        className="form-control" 
                        value={genre} 
                        onChange={(event)=>{setGenre(event.target.value)}}
                        />
                    </div>

                    <button className="btn btn-primary">Add Book</button>       
            </form>
        </div>
    </div>
    );
}

export default AddBook;