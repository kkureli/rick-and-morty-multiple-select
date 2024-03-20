import React, { useEffect, useRef } from "react";
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

  const selectedCardsRefs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    selectedCardsRefs.current = selectedCardsRefs.current.slice(
      0,
      selectedCharacters.length
    );
  }, [selectedCharacters]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    switch (event.key) {
      case "ArrowLeft":
        if (index > 0) {
          event.preventDefault();
          selectedCardsRefs.current[index - 1]?.focus();
        }
        break;
      case "ArrowRight":
        if (index < selectedCharacters.length - 1) {
          selectedCardsRefs.current[index + 1]?.focus();
        }
        break;
      case "Tab":
        if (index === selectedCharacters.length - 1) {
          selectedCardsRefs.current[0]?.focus();
        }
        break;
      case "Delete":
        handleRemoveCharacter(selectedCharacters[index]);
        break;
      default:
        break;
    }
  };

  return (
    <div className="search-input-container">
      {selectedCharacters.map((character, index) => (
        <SelectedCharacter
          handleRemoveCharacter={handleRemoveCharacter}
          key={character.id}
          character={character}
          ref={(element: HTMLButtonElement | null) =>
            (selectedCardsRefs.current[index] = element)
          }
          onKeyDown={(event) => handleKeyDown(event, index)}
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
