import Link from 'next/link'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 'auto',
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Link href="/business/[action]" as={`/business/location`}>
              <a>by Locations</a>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Link href="/business/[action]" as={`/business/date`}>
              <a>by date</a>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
