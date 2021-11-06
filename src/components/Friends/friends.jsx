import React, { useState } from 'react';
import axios from 'axios';


const Friends = () => {
    const [friends, setFriends] = useState([]);

    const verAmigos = async () => {
        const { data } = await axios.get("http://localhost:5000/amigos/");
        setFriends(data);
    }

    return (
        <>
            <button
                id='boton'
                onClick={() => verAmigos()}>
                Ver Amigos
            </button>

            {
                friends.map((friend, index) => {
                    return(
                        <div key={index}>
                            <p>Name: {friend.name}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Friends;