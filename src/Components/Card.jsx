import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const [saved, setSaved] = useState(false);

  const dentist = {
    dentistId: id,
    dentistName: name,
    dentistUsername: username,
  };

  useEffect(() => {
    const savedDentistsJson = localStorage.getItem("dentists");
    const savedDentists = JSON.parse(savedDentistsJson) || [];

    const isSaved = savedDentists.some(
      (savedDentist) => savedDentist.dentistId === dentist.dentistId
    );

    setSaved(isSaved);
  }, [dentist]);

  const toggleFav = () => {
    const savedDentistsJson = localStorage.getItem("dentists");
    let savedDentists = JSON.parse(savedDentistsJson) || [];

    if (!saved) {
      savedDentists.push(dentist);
    } else {
      savedDentists = savedDentists.filter(
        (savedDentist) => savedDentist.dentistId !== dentist.dentistId
      );
    }

    const updatedDentistsJson = JSON.stringify(savedDentists);
    localStorage.setItem("dentists", updatedDentistsJson);

    setSaved(!saved);
  };

  return (
    <div className="card">
      <Link key={id} to={`/dentist/${id}`}>
        <img src="../../public/images/doctor.jpg" alt="" width="200px" />
        <h4>{name}</h4>
        <p>{username}</p>
        <p>{id}</p>
      </Link>

      <button onClick={toggleFav} className="favButton">
        {saved ? "Quitar de favoritos" : "Agregar a favoritos"}
      </button>
    </div>
  );
};

export default Card;
