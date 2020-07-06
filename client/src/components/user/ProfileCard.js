import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = (muiBaseTheme) => ({
  card: {
    maxWidth: 300,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  media: {
    paddingTop: '56.25%',
  },
  content: {
    textAlign: 'left',
    padding: muiBaseTheme.spacing(3),
  },
  divider: {
    margin: `${muiBaseTheme.spacing(3)}px 0`,
  },
  heading: {
    fontWeight: 'bold',
  },
  subheading: {
    lineHeight: 1.8,
  },
});

const ProfileCard = ({ classes, image, name, email }) => {
  return (
    <div className='App'>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={image} />
        <CardContent className={classes.content}>
          <Typography
            className={'MuiTypography--heading'}
            variant={'h5'}
            gutterBottom
          >
            {name}
          </Typography>
          <Divider className={classes.divider} light />
          <Typography className={'MuiTypography--subheading'} variant={'h6'}>
            {email}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const WrappedApp = withStyles(styles)(ProfileCard);

export default WrappedApp;
