import Axios from 'axios';
import { Character } from './character.api-model';

const url = process.env.API_CHARACTERES_URL;
export const getCharacter = async (id: string): Promise<Character> => {
  const {data} = await Axios.get<Character>(url + id);
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
