// create card body for post so each post has its own card
import React from 'react';

function Card(props) {
  return (
    <div>

<div className="card mb-3" style={{maxWidth: "1000px"}}>
<div className="row no-gutters">
  <div className="col-md-8">
    <div className="card-body">
      <h2 className="card-title">{props.user}</h2>
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.body}</p>
      <p className="card=text">{props.date}</p>
    </div>
  </div>
</div>
</div>
</div>
);
}

export default Card;