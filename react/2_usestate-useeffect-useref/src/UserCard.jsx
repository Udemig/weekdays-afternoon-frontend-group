import React from "react";

const UserCard = (props) => {
  // Component'e geçilen props'u al
  console.log(props.user);

  return (
    <div className="card">
      <img
        src={props.user.image}
        className="card-img-top"
        style={{ maxHeight: 200 }}
        alt={props.user.firstName}
      />
      <div className="card-body">
        <div className="d-flex gap-2">
          <h5 className="card-title">{props.user.firstName}</h5>
          <h5 className="card-title">{props.user.lastName}</h5>
        </div>

        <p className="card-text">{props.user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
