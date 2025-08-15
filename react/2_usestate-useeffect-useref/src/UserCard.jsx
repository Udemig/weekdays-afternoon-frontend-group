import React from "react";

const UserCard = ({ user }) => {
  // Component'e geçilen u al
  //props.user -> Bu haliyle componente geçilen arı yönetirken uzun uzun kod yazarız.Bunun yerine obje dağıtma yöntemi kullanarak daha az kod yazabiliriz.

  // const { user } = props;

  return (
    <div className="card">
      <img
        src={user.image}
        className="card-img-top"
        style={{ maxHeight: 200 }}
        alt={user.firstName}
      />
      <div className="card-body">
        <div className="d-flex gap-2">
          <h5 className="card-title">{user.firstName}</h5>
          <h5 className="card-title">{user.lastName}</h5>
        </div>

        <p className="card-text">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
