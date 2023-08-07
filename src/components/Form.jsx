import React from 'react'
import {useState} from 'react'
import '../styles.css'

function Form({citySearch}) {

    const [form , setForm] = useState({
        searchTerm: '',
    })

    const handleChange = (e) =>{
        console.log(e.target.value)
        setForm({
            ...Form,
            searchTerm : e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        movieSearch(form.searchTerm);
    }

  return (
    <form onSubmit={handleSubmit} >
        <input type="text" value={form.searchTerm} onChange={handleChange} />
        <input type="submit" value="SUBMIT" />
    </form>
  )
}

export default Form