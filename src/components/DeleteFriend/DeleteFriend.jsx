import React, { useState } from 'react';
import axios from 'axios';

const DeleteFriend = () => {
    const [state,setState] = useState('')
    const handleDelete = async() => {
        await axios.delete(`http://localhost:5000/amigos/${state}`)
    }

    return (
        <div>
            <input id='inputDelete' onChange={(e) => setState(e.target.value)}></input>
            <button id='delete' onClick={() => handleDelete()}>Delete</button>
            <span id='sucess'></span>
        </div>
    )
}

export default DeleteFriend;