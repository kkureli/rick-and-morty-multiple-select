import React, { useEffect, useRef } from "react";
import { Character } from "../../types/character.type";
import CharacterCard from "../characterCard/characterCard";
import "./charactersList.css";
import Seperator from "../seperator/seperator";
type Props = {
  characters: Character[];
  handleCharacterSelect: (character: Character) => void;
  handleRemoveCharacter: (character: Character) => void;
  selectedCharacters: Character[];
  query: string;
};

const CharactersList = (props: Props) => {
  const {
    characters,
    handleCharacterSelect,
    selectedCharacters,
    handleRemoveCharacter,
    query,
  } = props;
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, characters.length);
  }, [characters]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    switch (event.key) {
      case "ArrowUp":
        if (index > 0) {
          event.preventDefault();
          cardRefs.current[index - 1]?.focus();
        }
        break;
      case "ArrowDown":
        if (index < characters.length - 1) {
          cardRefs.current[index + 1]?.focus();
        }
        break;
      case "Tab":
        if (index === characters.length - 1) {
          cardRefs.current[0]?.focus();
        }
        break;
      case "Delete":
        handleRemoveCharacter(characters[index]);
        break;
      default:
        break;
    }
  };

  return (
    <div className="cards-container">
      {characters.map((character, index) => {
        const isSelected = selectedCharacters?.includes(character);
        const onSelect = () => {
          if (isSelected) {
            handleRemoveCharacter(character);
          } else {
            handleCharacterSelect(character);
          }
        };

        return (
          <div>
            <CharacterCard
              query={query}
              key={character.id}
              isSelected={isSelected}
              character={character}
              onSelect={onSelect}
              ref={(element: HTMLDivElement | null) =>
                (cardRefs.current[index] = element)
              }
              onKeyDown={(event) => handleKeyDown(event, index)}
            />
            {index !== characters.length - 1 && <Seperator />}
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
