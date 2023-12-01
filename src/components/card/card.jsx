import React from "react";

const Card = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <div key={id} className="card-container">
      <img src={`https://robohash.org/${id}?set=set2/180×180`} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
