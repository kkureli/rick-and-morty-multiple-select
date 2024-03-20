import { AxiosError } from "axios";
import { Character } from "../types/character.type";
import HttpClient from "./httpclient";

const services = {
  fetchCharacters: async ({
    setLoading,
    setCharacters,
    query,
    setError,
  }: {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>; //To show loading state
    setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
    query: string;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
  }) => {
    try {
      setLoading(true);
      const response = await HttpClient.Get(`/character/?name=${query}`);
      setCharacters(response.results);
      setError(null);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error?.response?.data?.error);
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  },
};

export default services;
