import React from 'react';
import { Button, CardActions, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import Divider from '@material-ui/core/Divider/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { CharacterComment } from './character-comment.vm';
import * as classes from './character-comment.styles';


interface Props {
  characterComment: CharacterComment;
  onSave: (characterComment: CharacterComment) => void;
  onEdit:(characterComment: CharacterComment) => void;
}

export const CharacterCommentComponent: React.FC<Props> = (props) => {
  const { characterComment, onSave, onEdit } = props;
  
  const [value, setValue] = React.useState('');
  const [btnDisabled, setBtnDisabled] = React.useState(true);

  const handleChange = (newValue) => {
   setValue(newValue);
  };

  const handleAdd = () => {
    if(value)  characterComment.comment.push(value);
    onSave(characterComment);
    setValue('');
    setBtnDisabled(true);
  };

  const handleEdit = () => {
    setBtnDisabled(!btnDisabled);
  };

  return (
    <div className={classes.root}>
       <Card>
       <CardHeader
        avatar={<Avatar aria-label="Character">{characterComment.id}</Avatar>}
        title={characterComment.name}
      />
      <CardContent>
      <Typography variant="h6" >
            Comments:
            <Divider variant="fullWidth" />
            <List dense className={classes.root}>
            {characterComment.comment.map((value) => {
              return(
                  <ListItem key={value}>
                  <ListItemAvatar>
                    <Avatar variant="square">
                      <AssignmentIcon />
                    </Avatar>
                  </ListItemAvatar>
                    <TextField
                      id="input-comment-line"
                      disabled={btnDisabled}
                      defaultValue={value} 
                    />  
                 </ListItem>
            )
            })}  
            </List>
          </Typography>
          <TextField 
            id="input-new-comment"  
            label="Add new comment" 
            multiline 
            rowsMax={4} 
            value={value}  
            onChange={(e)=>handleChange(e.target.value)}   
           />
          
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small" color="primary" startIcon={<EditIcon />} onClick ={handleEdit} >Edit</Button>
            <Button variant="contained" size="small" color="secondary" startIcon={<SaveIcon />} onClick={handleAdd} > Save</Button>
          </CardActions>
       </Card>
    </div>
    
  );

};
