import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
    width: '100%',
  },

  input: {
    fontSize: '1.6rem',
    padding: '0.8em !important',
  },

  label: {
    fontSize: '5.6rem',
    padding: '8px !important',
  },
}));

const RequestInputField = ({
  input,
  label,
  className,
  meta: { error, touched },
}) => {
  // meta parameter contains details regarding errors and
  // interaction of the user with the input

  const classes = useStyles();

  return (
    <div className={className}>
      <TextField
        {...input}
        error={touched && error ? true : false}
        helperText={touched && error && <span>{error}</span>}
        autoComplete='off'
        id='outlined-basic'
        label={label}
        variant='outlined'
        className={classes.root}
        InputProps={{
          classes: {
            input: classes.input,
          },
        }}
        InputLabelProps={{
          classes: {
            label: classes.label,
          },
        }}
      />
    </div>
  );
};

export default RequestInputField;

// <input {...input} autoComplete='off' />
