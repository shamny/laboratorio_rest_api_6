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
import { formValidation } from './character-comment.validations';
import { CharacterComment } from './character-comment.vm';
import * as classes from './character-comment.styles';


interface Props {
  characterComment: CharacterComment;
  onSave: (characterComment: CharacterComment) => void;
}

export const CharacterCommentComponent: React.FunctionComponent<Props> = (props) => {
  const { characterComment, onSave } = props;

  return (
    
    <Formik
      onSubmit={onSave}
      initialValues={characterComment}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="id" label="id" />
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent
            name="comment"
            label="Comments"
            multiline={true}
            rows={1}
            rowsMax={2}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );

};
