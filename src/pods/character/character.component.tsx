import React from 'react';
import { Formik, Form } from 'formik';
import {  TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import Divider from '@material-ui/core/Divider/Divider';
import Link from '@material-ui/core/Link/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Character } from './character.vm';
import * as classes from './character.styles';


interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character} = props;

  return (
    <div className={classes.root}>
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.id}</Avatar>}
        title={character.name}
        subheader={character.status}
      />
      <CardContent>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography gutterBottom variant="h6">
            {character.name} - {character.gender}
          </Typography>
          <Divider variant="fullWidth" />
          <Typography variant="subtitle1" gutterBottom>
            {character.species} - {character.status}
          </Typography>
          <Divider variant="fullWidth" />
          
          <Typography variant="subtitle1" gutterBottom >
            First seen in:: <Link href={character.origin.url}>{character.origin.name} </Link>
          </Typography>
          <Divider variant="fullWidth" />
          <Typography variant="subtitle1" gutterBottom >
          Last known location:: <Link href={character.location.url}>{character.location.name} </Link>
          </Typography>
          <Divider variant="fullWidth" />
          <Typography variant="h6" gutterBottom >
            Episodes:
            <List dense className={classes.root}>
            {character.episode.map((value) => {
              return(
                  <ListItem key={value} button>
                  <ListItemText id={value} primary={value} />
                  </ListItem>
            )
            })}  
            </List>
          </Typography>
          <Divider variant="fullWidth" />
          <Typography variant="subtitle1" gutterBottom >
            Created: {character.created} 
          </Typography>
      </CardContent>
      
    </Card>
    </div>
  );
};
