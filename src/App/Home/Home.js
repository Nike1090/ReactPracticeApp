import React from "react";
import Card from "../Card/Card";
import './Home.css';
import { Navigate } from 'react-router'

function Home() {

  if(!sessionStorage.getItem("user")){
    console.log("Here");
    return <Navigate to={"/"}/>
  }
  return (
    <div>
      <div className="main">
        <br></br>
        <div className="heading"><h1>Boston Express - Train Parts Making</h1>
          <br></br>
          <h2>Passion is all it takes</h2>
        </div>
      </div>
      <Card color={"rgb(97, 219, 251)"} title="This is the Home page and is created using HTML, CSS & React. This box is an imported Card." />
      <div className="navbar">
        <h3>Copyright &copy; 2023</h3>
      </div>
    </div>
  );
}

export default Home