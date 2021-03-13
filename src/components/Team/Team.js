import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Team = (props) => {
    
        const {strTeam, children,strTeamBadge,strTeamLogo,strSport, strLeague, strCountry, strAlternate, idTeam} = props.team;

    return (
        <div className ="ClubCard" style={{ margin: "20px 10px" }}>
        <Card
        style={{
          width: "20rem",
          border: "1",
          boxShadow: "1px 3px 21px 5px grey",
          borderRadius: "1px"
        }}>
            <div style={{ width: "15rem", margin: "auto", marginTop: "20px" }}>
          <Card.Img variant="top" src={strTeamLogo} />
          <Card.Img variant="top" src={strTeamBadge} />
          </div>

      
          <Card.Body>
          <Card.Title style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            {strAlternate || strLeague}
          </Card.Title>
          
          <p
            style={{ color: "#656565", fontSize: "1.1rem", fontWeight: "400" }}
          >
            Sports type: {strSport}
          </p>

          {children}

            {/* <h3>This is Team</h3>  */}
            <h3> {strTeam}</h3>
            <p>Country: {strCountry}</p>
            <p>Sports type  : {strSport}</p>
            <p>League Name : {strLeague}</p>
            <Button as = {Link} to ={`/Team/${idTeam}`} style ={{borderRadius:"0"}}>Explore-></Button>

            </Card.Body>
            </Card>
        </div>
    );
};

export default Team;
