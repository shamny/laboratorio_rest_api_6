export interface CharacterComment {
  id:	string;	
  name:	string;
  comment:string[];
}

export const createEmptyCharacterComment = (): CharacterComment => ({
  id: '',
  name: '',
  comment:[],
});
