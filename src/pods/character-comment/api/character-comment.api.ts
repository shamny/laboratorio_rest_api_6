import Axios from 'axios';
import { Character } from 'pods/character/api/character.api-model';
import { CharacterComment } from './character-comment.api-model';

const commentsUrl = process.env.JSON_CHARACTER_COMMENTS_URL;
const characterUrl = process.env.API_CHARACTERES_URL;

export const getCharacterComment = async (id: string): Promise<CharacterComment> => {
  const response = await fetch(`${commentsUrl}/${id}`);
   if (response.ok){
    return await response.json();
  }else {
    console.log('No hay comentarios');
    const {data} = await Axios.get<Character>(characterUrl + id);
    const newCharacterComment:CharacterComment = { id: parseInt(id), name: data.name, comment:[]};
    return newCharacterComment;
   }
};

export const saveCharacterComment = async (characterComment: CharacterComment): Promise<boolean> => {
  const response = await fetch(`${commentsUrl}/${characterComment.id}`);
  if (response.ok){
    //PUT
    await fetch(`${commentsUrl}/${characterComment.id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(characterComment),
    });
  }else{
    //POST
    await fetch(commentsUrl,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(characterComment),
    });
  }
  return true;
};
