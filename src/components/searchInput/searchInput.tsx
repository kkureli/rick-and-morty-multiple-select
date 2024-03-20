import React from "react";
import "./searchInput.css";
import SelectedCharacter from "../selectedCharacter/selectedCharacter";
import { Character } from "../../types/character.type";

type Props = {
  inputRef: React.RefObject<HTMLInputElement>;
  query: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  selectedCharacters: Character[];
  handleRemoveCharacter: (character: Character) => void;
};

const SearchInput = (props: Props) => {
  const {
    inputRef,
    query,
    handleInputChange,
    handleKeyDown,
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
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchInput;
