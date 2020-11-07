import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import Button from '@material-ui/core/Button';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onDetail:(id:string) =>void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit,  onDetail } = props;

  return (
    <Card>
      <CardHeader 
        avatar={<Avatar aria-label="Character">{character.id}</Avatar>}
        title={character.name}
        subheader={character.status}
      />
      <CardContent >
        <div className={classes.content}>
          <CardMedia
            image={character.picture}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.species} 
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {character.location}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button variant="outlined" onClick ={() => onDetail(character.id)} >Details</Button>
        <Button variant="outlined" onClick={() => onEdit(character.id)} color="primary">
          Comments
        </Button>
      </CardActions>
    </Card>
  );
};
