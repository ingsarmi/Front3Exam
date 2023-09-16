import React, { useContext } from "react";
import Card from "../Components/Card";

import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal);

  const { theme, data } = state;
  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}

        {data.map((medico) => (
          <Card
            key={medico.id}
            name={medico.name}
            username={medico.username}
            id={medico.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
