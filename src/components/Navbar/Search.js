import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import SearchImage from '../../assets/search.svg';
import { searchAdded } from '../../features/filters/filterSlice';

const Search = () => {
    const dispatch = useDispatch()
    const {search} = useSelector(state => state.filter)
    const [input , setInput] = useState(search)
    const match  = useMatch('/')
    const navigate = useNavigate()
    const hendleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchAdded(input))
        if(match === null){
            navigate('/')
        }
    }
    return (
        <>
        <form onSubmit={hendleSubmit}>
        <input
            className="outline-none border-none mr-2"
            type="search"
            name="search"
            placeholder="Search"
            value={input}
          onChange ={(e) => setInput(e.target.value)}

        />
        <button type='submit'>
        <img
    className="inline h-4 cursor-pointer"
    src={SearchImage} 
    alt="Search"
   
/>

        </button>
         
    </form>
   
</>
    );
};

export default Search;