import React from "react";
import images from "./logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={images} alt="logo" className="header--image" />
      <h2 className="header--title">MEME GENERATOR</h2>
      <h3 className="header--project">React Course - Project 3</h3>
    </header>
  );
}
