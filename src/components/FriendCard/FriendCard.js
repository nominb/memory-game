import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
    <div className="card img-container hover">
      <img alt={props.name} src={props.image} id={props.id}
      onClick={() => props.shuffleFriendCard(props.id)} className="shuffleFriend"/>
  </div>
);

export default FriendCard;
