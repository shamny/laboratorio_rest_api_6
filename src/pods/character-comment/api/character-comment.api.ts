import Axios from 'axios';
import { CharacterComment } from './character-comment.api-model';
import { mockCharacterComment } from './character-comment.mock-data';

const url = process.env.API_CHARACTERES_URL;
export const getCharacterComment = async (id: string): Promise<CharacterComment> => {
  return mockCharacterComment.find((h) => h.id.toString() === id);
};

export const saveCharacterComment = async (characterComment: CharacterComment): Promise<boolean> => {
  return true;
};
