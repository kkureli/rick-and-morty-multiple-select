import React from "react";
import { Character } from "../../types/character.type";
import "./characterCard.css";

type Props = {
  character: Character;
  isSelected: boolean;
  onSelect: () => void;
  query: string;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void; // Klavye olaylarını dinlemek için
};

const CharacterCard = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const { character, onSelect, isSelected, query, onKeyDown } = props;

    const highlightName = (name: string, query: string): React.ReactNode => {
      const regex = new RegExp(`(${query})`, "gi");
      const parts = name.split(regex);

      return (
        <>
          {parts.map((part, index) =>
            regex.test(part) ? (
              <strong key={index}>{part}</strong>
            ) : (
              <span key={index}>{part}</span>
            )
          )}
        </>
      );
    };

    return (
      <div className="character-card-container" key={character.id}>
        <input
          ref={ref}
          onKeyDown={onKeyDown}
          tabIndex={0}
          type="checkbox"
          className="cardCheckbox"
          name="cardCheckbox"
          checked={isSelected}
          onChange={onSelect}
        />

        <img
          className="character-card-img"
          src={character.image}
          alt={character.name}
        />
        <div className="card-text-info-container">
          <p>{highlightName(character.name, query)}</p>
          <p>{`${character.episode.length} episodes`}</p>
        </div>
      </div>
    );
  }
);

export default CharacterCard;
