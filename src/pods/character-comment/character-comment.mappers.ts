import * as apiModel from './api/character-comment.api-model';
import * as viewModel from './character-comment.vm';

export const mapCharacterCommentFromApiToVm = (
  characterComment: apiModel.CharacterComment
): viewModel.CharacterComment => ({
  ...characterComment,
  id: characterComment.id.toString(),
  name: characterComment.name,
  comment:characterComment.comment,

});

export const mapCharacterCommentFromVmToApi = (characterComment: viewModel.CharacterComment): apiModel.CharacterComment =>
  (({
    ...characterComment,
  id: characterComment.id,
  name: characterComment.name,
  comment:characterComment.comment,
  } as unknown) as apiModel.CharacterComment);
