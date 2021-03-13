import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
// import Footer from '../Footer/Footer';

const Home = () => {
    const [teams,setTeams] = useState ([]);

    useEffect (() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch (url)
        .then (res => res.json())
        .then(data=> setTeams (data.teams.slice (0,15)))
    },[])


    return (
        <div className="HomeBody container">

<div className="headerImage"></div>
<div className="d-flex flex-wrap justify-content-between">

           {/* <h1> World Football Club Cup Teams</h1>  */}
           {/* <h1>All Club info:{teams.length}</h1> */}
            {
                teams.map(team =><Team team ={team}></Team>)
            }
        
        </div>
        </div>
    );
};

export default Home;
