import Axios from 'axios';
import { CharacterEntityApi,ApiResponse } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
//const url = 'https://rickandmortyapi.com/api/character/';
const url = process.env.API_CHARACTERES_URL;
export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const {data} = await Axios.get<ApiResponse>(url);
  return data.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
