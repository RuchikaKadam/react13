import React from "react";

export default function Note({ index, title, delNote, changeCurrent }) {
  return (
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}} onClick={() => changeCurrent(index)}>
      <h3>{title}</h3>
      <button
      style={{width:"10%", height:"80%"}}
       onClick={() => delNote(index)}>&#9747;</button>
    </div>
  );
}