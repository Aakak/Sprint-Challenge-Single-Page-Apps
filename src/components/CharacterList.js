import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import FormikSearchForm from "./SearchForm";
import { BrowserRouter as Route, Link } from "react-router-dom";

const CharacterList = props => {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response);
          setData(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getCharacters();
  }, []);

  return (
    <div className="character-list">
      <nav>
        <Link exact className="button" to="/">
          Home
        </Link>
        <FormikSearchForm characters={data} handler={setData} />
      </nav>

      {data.map(character => (
        <CharacterCard
          name={character.name}
          image={character.image}
          location={character.location.name}
          species={character.species}
          gender={character.gender}
          status={character.status}
        />
      ))}
    </div>
  );
};

export default CharacterList;
