import React from "react";

export default function Guitar(props) {
  return (
    <div className="guitar">
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <h2>{props.id}</h2>
    </div>
  );
}
