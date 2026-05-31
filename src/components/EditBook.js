import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


function EditBook() {
    const {id} = useParams();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [published_year, setPublishedYear] = useState("");
    const [genre, setGenre] = useState("");

    let navigate = useNavigate();

    useEffect(()=>{
        axios.get("https://worksheet-library.mashupstack.com/books"+id)
             .then(response=>{
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setPublishedYear(response.data.published_year);
            setGenre(response.data.genre);
        })
             .catch(error => {
               console.log(error);
        });
    },[id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put("https://worksheet-library.mashupstack.com/books/"+id,{
            title,
            author,
            published_year,
            genre,
        })
        .then(()=>{
            alert("Book Updated Successfully");
            navigate('/');
        })
        .catch(error => {
               console.log(error);
        });
    };
    return (
    <div>
        <h2>Edit Book</h2>
        <div className="container">
                    
                  <form onSubmit={handleUpdate}>
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

                    <button className="btn btn-primary">Update Book</button>       
            </form>
        </div>
    </div>
    );
}

export default EditBook;