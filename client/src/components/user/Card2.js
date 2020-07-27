import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
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

export default function Card2({ date, name, contactNumber, deliveryLocation }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Request User name
        </Typography>
        <Typography variant='h4' component='h2'>
          {name}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          date: {date}
        </Typography>

        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
          style={{ textAlign: 'right' }}
        >
          Delivery details
        </Typography>
        <Typography variant='h4' component='h2' style={{ textAlign: 'right' }}>
          {deliveryLocation}
        </Typography>
        <Typography
          className={classes.pos}
          color='textSecondary'
          style={{ textAlign: 'right' }}
        >
          {contactNumber}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size='large' variant='outlined'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
