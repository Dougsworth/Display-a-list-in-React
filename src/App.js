import React from "react";
import Guitar from "./components/Guitar";
import guitars from "./components/guitarData";

export default function App() {
  const guitarElements = guitars.map((guitar) => {
    return <Guitar id={guitar.id} name={guitar.name} price={guitar.price} />;
  });
  return <div>{guitarElements}</div>;
}
