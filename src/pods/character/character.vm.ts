export interface Character {
  id: string;
  name: string;
  species: string;
  status: string;
  type: string;
  gender: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  species: '',
  status: '',
  type: '',
  gender: '',
});
