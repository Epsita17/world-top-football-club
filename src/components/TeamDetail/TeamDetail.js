import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import"./TeamDetail.css"
import Female from "../image/female.png";
import Male from "../image/male.png";
import Mixed from "../image/mixed.jpg";


const TeamDetail = () => {
    // const {strTeam, strSport, strLeague, strCountry, idTeam} = props.teamDetails;
    const {teamId} = useParams();
    

    const [teamsDetails, setTeamDetails] = useState({});
    const {strTeam,strSport,strDescriptionEN,strTeamBanner, strTeamFanart1,strTeamLogo,strTeamBadge,strGender,strLeague, strCountry,strAlternate, idTeam} = TeamDetail;

    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamDetails(data.teams[0]));
    }, [teamId])

    return (
        <div>
        <div className="Banner" style={{ backgroundImage: `url(${strTeamBanner})`}}>
        <div className="child">
          <img src={strTeamBadge} className="imageOfHead" alt="icons" />
        </div>
      </div>

      <div className="container">
      <div className="infoBox" style={{ marginTop: "2%" }}>
      <div className="ClubInfo d-flex justify-content-between">   
      
      <div
              style={{ marginLeft: "10px" }}
              className="text-justify InfoMain"
            >

            <p>Team Details {teamId}</p>
            <h2>Club :{teamsDetails.strTeam}</h2>
            <h4 className="text-start">{strAlternate } </h4>
            <p>Country: {teamsDetails.strCountry}</p>
            <p>Sports type:{teamsDetails.strSport}</p>
            <p>Gender   :{teamsDetails.strGender}</p>  
            <p>You tube :{teamsDetails.strLeague}</p>
             <p>Twitter  :{teamsDetails.strTwitter}</p>
            <p>Facebook :{teamsDetails.strFacebook}</p>
            <p>Instagram :{teamsDetails.strInstagram}</p> 
            <p>Website  :{teamsDetails.strWebsite}</p> 
            <p>Established:{teamsDetails.intFormedYear}</p>
        </div>

        <div className="images">
              {strGender === "Male" && (
                <img src={Male} alt="" style={{ float: "right" }} />
              )}
              {strGender === "Female" && (
                <img src={Female} alt="" style={{ float: "right" }} />
              )}
              {strGender === "Mixed" && (
                <img src={Mixed} alt="" style={{ float: "right" }} />
              )}
            </div>
          </div>

          <div className="text-justify">
          <p style={{ marginTop: "1rem", marginBottom: "2.5rem" }}>
              {teamsDetails.strDescriptionEN}
            </p>
            <en>{strAlternate || strLeague} </en>
            {strTeamFanart1 && (
              <div style={{ width: "100%", textAlign: "center" }}>
                <img
                  src={strTeamFanart1}
                  width={"50%"}
                  alt=""
                />
              </div>
            )}

            {/* <p style={{ marginTop: "1rem", marginBottom: "2.5rem" }}>
              {strDescriptionEN}
            </p> */}
           
          </div>
          </div>
          </div>
          </div>
        
    );
};

export default TeamDetail;

