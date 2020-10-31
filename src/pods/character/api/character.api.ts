import Axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockCharacterCollection } from './character.mock-data';

const url = process.env.API_CHARACTERES_URL;
export const getCharacter = async (id: string): Promise<Character> => {
  const {data} = await Axios.get<Character>(url + id);
  console.log(url + id);
  return data;
 // return mockCharacterCollection.find((h) => h.id.toString() === id);
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
