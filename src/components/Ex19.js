import React from "react";
import PropTypes from "prop-types";
import animals from "../data";
import "./Ex19.css";

const defaultAdditional = {
  notes: "No Additional Information",
};

const animalImages = {
  Lion: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=85",
  Gorilla:
    "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=85",
  Zebra:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwfZXVIyzkoh0t4-__Rb6DSMnFxg7dzD_ydj1KJCdwOA&s=10",
};

function showAdditionalData(additional) {
  const details = Object.entries(additional)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  window.alert(details);
}

function AnimalCard({
  additional = defaultAdditional,
  diet,
  name,
  scientificName,
  showAdditional,
  size,
}) {
  return (
    <article className="animal-card">
      <img className="animal-card-image" src={animalImages[name]} alt={name} />
      <div className="animal-card-content">
        <h2>{name}</h2>
        <ul className="animal-card-facts">
          <li>Scientific Name: {scientificName}</li>
          <li>{size} kg</li>
          <li>{diet.join(", ")}.</li>
        </ul>
        <button type="button" onClick={() => showAdditional(additional)}>
          More Info
        </button>
      </div>
    </article>
  );
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};

AnimalCard.defaultProps = {
  additional: defaultAdditional,
};

export default function Ex19() {
  return (
    <section>
      <h1 className="ex19-title">Ex19 - ePropTypes</h1>
      <div className="animal-grid">
        {animals.map((animal) => (
          <AnimalCard
            key={animal.name}
            {...animal}
            showAdditional={showAdditionalData}
          />
        ))}
      </div>
    </section>
  );
}
