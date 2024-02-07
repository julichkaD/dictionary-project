import React from "react";
import ReactAudioPlayer from "react-audio-player";

function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div>
      {/* <a href={props.phonetic.audio} target="_blank" rel="noreferrer"> */}
      <ReactAudioPlayer src={props.phonetic.audio} AutoPlay controls />

      <br />
      {props.phonetic.text}
    </div>
  );
}

export default Phonetic;
