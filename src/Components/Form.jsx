import React, { useState } from "react";

const Form = () => {
  const [usuario, setUsuario] = useState({ name: "", mail: "" });
  const [mensaje, setMensaje] = useState(false);
  const [error, setError] = useState(false);

  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.name.length > 5 && validEmail.test(usuario.mail)) {
      setMensaje(true);
      setError(false);
    } else {
      setMensaje(false);
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Fullname"
          value={usuario.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="mail"
          placeholder="Mail"
          value={usuario.mail}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
      {mensaje && (
        <h2>Gracias {usuario.name}, te contactaremos lo antes posible por correo electrónico</h2>
      )}
      {error && <h2>Por favor, verifique su información nuevamente</h2>}
    </div>
  );
};

export default Form;
