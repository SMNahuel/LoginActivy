import React, { useState } from 'react';
import axios from 'axios';

const SearchFriend = () => {
    const [search, setSearch] = useState({
        id : null,
        friend: ''
    });

    const buscarAmigos = async () => {
        const {data} = await axios.get(`http://localhost:5000/amigos/${search.id}`)
        
        setSearch({
            ...search,
            friend: data.name
        })
    }   

    return (
        <>
            <input id='input' onChange={(e) => setSearch({...search, id : e.target.value})}></input>
            <button id='search' onClick={() => buscarAmigos()}>Buscar</button>
            <br/>
            <span id='amigo'>
            {search.friend}
            </span>
            <br/>
        </>
    )
}

export default SearchFriend;