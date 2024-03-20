import React from "react";
import { Character } from "../../types/character.type";
import "./selectedCharacter.css";
type Props = {
  character: Character;
  handleRemoveCharacter: (character: Character) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void; // Klavye olaylarını dinlemek için
};

const SelectedCharacter = React.forwardRef<HTMLButtonElement, Props>(
  (props, ref) => {
    const { character, handleRemoveCharacter, onKeyDown } = props;

    return (
      <div className="selected-character-container">
        <p>{character.name}</p>
        <button
          onKeyDown={onKeyDown}
          tabIndex={0}
          ref={ref}
          onClick={() => handleRemoveCharacter(character)}
          className="selected-character-remove-btn"
        >
          <p>X</p>
        </button>
      </div>
    );
  }
);

export default SelectedCharacter;
