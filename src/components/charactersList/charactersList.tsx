import React from "react";
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
            />
            {index !== characters.length - 1 && <Seperator />}
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
