import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { CiEdit, CiTrash } from "react-icons/ci";

const Card = ({ contact }) => {
  // Contact içerisindeki name ve surname değerlerine eriş
  const [name, surname] = contact.name.split(" ");

  return (
    <div className="card">
      {/* Buttons */}
      <div className="card-buttons">
        <button>
          <CiEdit />
        </button>
        <button>
          <CiTrash />
        </button>
      </div>

      {/* Profile  */}
      <h1>
        {name[0]} {surname[0]}
      </h1>

      {/* Name */}
      <h3 className="contact-name">{contact.name} </h3>

      {/* Position */}
      <p className="contact-position">{contact.position}</p>

      {/* Company */}
      <p className="contact-company">{contact.company}</p>

      {/* Bottom */}

      <div className="contact-bottom">
        {/* Phone */}

        <div>
          <span>
            <FaPhone />
          </span>
          <span>{contact.phone}</span>
        </div>

        {/* Email */}
        <div>
          <span>
            <IoMail />
          </span>
          <span>{contact.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
