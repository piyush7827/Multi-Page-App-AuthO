import React from "react";
import "./Home.css";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <h4 style={{marginLeft:"46px"}}>Welcome To Home</h4>
      <h1 style={{marginLeft:"56px"}}>Welcome to My Blog</h1>
      <div className="home-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
