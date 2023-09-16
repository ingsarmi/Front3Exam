import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const dataDentist = JSON.parse(localStorage.getItem("dentists"));

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {dataDentist.map((medico) => (
          <Card
            key={medico.dentistId}
            name={medico.dentistName}
            username={medico.dentistUsername}
            id={medico.dentistId}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
