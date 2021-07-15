import React from 'react';
import  { useState } from 'react';

export const Addtodo = (addTodo) => {
    const[title,settitle]=useState("");
    const [desc, setdesc] = useState("");
    const submit=(e) =>{
        e.preventDefault();
        if(!title|| !desc){
            alert("title and discription can not be blank");
        }
        else {
            addTodo.addTodo(title, desc);
            settitle("");
            setdesc("");
        }

    }
    return (
        <div className="container my-3">
            <h2> ADD TODO </h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title}  onChange={(e)=>{settitle(e.target.value)} } 
                    className="form-control" id="title" aria-describedby="emailHelp"/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Discription</label>
                    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)} } 
                    className="form-control" id="desc"/>
                </div>
                
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
            
        </div>
    )
}
