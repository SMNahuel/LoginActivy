import React from 'react';
import Friends from '../Friends/friends';
import SearchFriend from '../SearchFriend/SearchFriend';
import DeleteFriend from '../DeleteFriend/DeleteFriend';

const Home = () => {



    return (
        <div className="container">
            <Friends />
            <h2>Ver Amigos</h2>
            <SearchFriend />
            <DeleteFriend />
        </div>
    );
} 

export default Home;
