import React, { useState, useEffect } from "react";
import services from "../../api/services";
import { Character } from "../../types/character.type";
import SearchInput from "../../components/searchInput/searchInput";
import Loading from "../../components/loading/loading";
import Error from "../../components/error/error";
import CharactersList from "../../components/charactersList/charactersList";
import Container from "../../components/container/container";
import UFO from "../../components/ufo/ufo";
import Video from "../../components/video/video";

const HomeView: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <Container>
      <UFO />
      <SearchInput
        handleRemoveCharacter={handleRemoveCharacter}
        selectedCharacters={selectedCharacters}
        handleInputChange={handleInputChange}
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
      <Video />
    </Container>
  );
};

export default HomeView;
