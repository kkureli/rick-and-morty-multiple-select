import React, { useState, useEffect, useRef, KeyboardEvent } from "react";
import services from "../../api/services";
import { Character } from "../../types/character.type";
import SearchInput from "../../components/searchInput/searchInput";
import Loading from "../../components/loading/loading";
import Error from "../../components/error/error";
import CharactersList from "../../components/charactersList/charactersList";
import Container from "../../components/container/container";

const HomeView: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.length > 0) {
      services.fetchCharacters({
        query,
        setCharacters,
        setError,
        setLoading,
      });
    } else {
      setCharacters([]);
    }
  }, [query]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacters([...selectedCharacters, character]);
  };

  const handleRemoveCharacter = (character: Character) => {
    setSelectedCharacters(
      selectedCharacters.filter((c) => c.id !== character.id)
    );
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" && characters.length > 0) {
      debugger;
      // Handle down arrow key
    } else if (event.key === "ArrowUp") {
      debugger;
      // Handle up arrow key
    } else if (event.key === "Tab" || event.key === "Enter") {
      debugger;
      // Handle tab or enter key
    }
  };

  return (
    <Container>
      <SearchInput
        handleRemoveCharacter={handleRemoveCharacter}
        selectedCharacters={selectedCharacters}
        handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown}
        inputRef={inputRef}
        query={query}
      />
      {loading && <Loading />}
      {error ? (
        <Error errorMessage={error} />
      ) : (
        characters.length > 0 && (
          <CharactersList
            query={query}
            selectedCharacters={selectedCharacters}
            characters={characters}
            handleCharacterSelect={handleCharacterSelect}
            handleRemoveCharacter={handleRemoveCharacter}
          />
        )
      )}
    </Container>
  );
};

export default HomeView;
