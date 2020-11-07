import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacterComment, CharacterComment } from './character-comment.vm';
import { mapCharacterCommentFromApiToVm, mapCharacterCommentFromVmToApi } from './character-comment.mappers';
import { CharacterCommentComponent } from './character-comment.component';

export const CharacterCommentContainer: React.FunctionComponent = (props) => {
  const [characterComment, setCharacterComment] = React.useState<CharacterComment>(createEmptyCharacterComment());
  const { id } = useParams();
  const history = useHistory();

  
  const handleLoadCharacterComment = async () => {
    const apiCharacterComment = await api.getCharacterComment(id);
    setCharacterComment(mapCharacterCommentFromApiToVm(apiCharacterComment));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacterComment();
    }
  }, []);

  const handleSave = async (characterComment: CharacterComment) => {
    const apiCharacterComment = mapCharacterCommentFromVmToApi(characterComment);
    const success = await api.saveCharacterComment(apiCharacterComment);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save Character Comment');
    }
  };

  return <CharacterCommentComponent characterComment={characterComment} onSave={handleSave} />;
};
