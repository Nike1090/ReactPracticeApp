import React from "react";
import Card from "../Card/Card";
import { Navigate } from 'react-router'

function About() {

  if(!sessionStorage.getItem("user")){
    return <Navigate to={"/"}/>
  } 
  return (
    <div>
      <div className="main">
      <br></br>
        <div className="heading"><h1>Boston Express - Train Parts Making</h1></div>
        <h3>Making parts for over past 10 years
          <br></br><br></br>Providing the best and most effective, durable parts" - Rammy Part Awards 2023
          <br></br><br></br>Visit a store and buy it.
          <br></br><br></br>Stay Tuned! Soon we are launching online website</h3>
      </div>


      <Card color={"rgb(97, 219, 251)"} title="This page has information about the company and is created using HTML, CSS & React." />
      <div className="navbar">
        <h3>Copyright &copy; 2023</h3>
      </div>



    </div>
  )
}

export default About