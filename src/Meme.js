import React from "react";
import memeData from "./memeData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className="form">
        <input className="form--input" placeholder="Top text" type="text" />
        <input className="form--input" placeholder=" Bottom text" type="text" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <img src={memeImage} alt="" className="meme--image" />
    </main>
  );
}
