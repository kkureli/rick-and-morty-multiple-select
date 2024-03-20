import React from "react";
import { Character } from "../../types/character.type";
import "./selectedCharacter.css";
type Props = {
  character: Character;
  handleRemoveCharacter: (character: Character) => void;
};

const SelectedCharacter = (props: Props) => {
  const { character, handleRemoveCharacter } = props;

  return (
    <div className="selected-character-container">
      <p>{character.name}</p>
      <button
        onClick={() => handleRemoveCharacter(character)}
        className="selected-character-remove-btn"
      >
        <p>X</p>
      </button>
    </div>
  );
};

export default SelectedCharacter;
