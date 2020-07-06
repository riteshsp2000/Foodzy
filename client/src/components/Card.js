import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: '20%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ status, date, acceptedUser }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {status}
        </Typography>
        <Typography variant='h5' component='h2'>
          {state ? 'Accepted!' : 'Pending..'}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {date}
        </Typography>

        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Accepted User details.
        </Typography>
        <Typography variant='h5' component='h2'>
          {acceptedUser.name}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {acceptedUser.contactNumber}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
