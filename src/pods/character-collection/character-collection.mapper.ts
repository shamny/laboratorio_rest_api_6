import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id.toString(),
  picture: `${character.image}`,
  name: character.name,
  species: character.species,
  status: character.status,
  type: character.type,
});
