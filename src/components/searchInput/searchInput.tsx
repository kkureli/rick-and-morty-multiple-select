import React from "react";
import "./searchInput.css";
import SelectedCharacter from "../selectedCharacter/selectedCharacter";
import { Character } from "../../types/character.type";

type Props = {
  query: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedCharacters: Character[];
  handleRemoveCharacter: (character: Character) => void;
};

const SearchInput = (props: Props) => {
  const {
    query,
    handleInputChange,
    selectedCharacters,
    handleRemoveCharacter,
  } = props;

  return (
    <div className="search-input-container">
      {selectedCharacters.map((character) => (
        <SelectedCharacter
          handleRemoveCharacter={handleRemoveCharacter}
          key={character.id}
          character={character}
        />
      ))}
      <input
        className="search-input"
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchInput;
