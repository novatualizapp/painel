import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },

  },
  paper: {
    margin: '10px',
    padding: '10px',
    float: 'left',
  }
}));

export default function Blocos() {
  const classes = useStyles();

  const [contUsers, setContUsers] = useState()

  axios.get('https://back-9no1.onrender.com/usuarios').then(resolve => {
    console.log(resolve.data.length)
    setContUsers(resolve.data.length)
    return 
  }).catch(error => {
    console.log('Error :', error)
  })



  return (
    <React.Fragment>

      <Grid container spacing={1}>
        <Grid container item xs={12} sm={12} spacing={0}>
          <Paper elevation={12} className={classes.paper}>
            <h1>Usuarios</h1>
            <p>Total de <strong>{contUsers}</strong> Usuarios Cadastrados</p>
          </Paper>
          <Paper elevation={12} className={classes.paper}>
            <h1>Usuarios Admin</h1>
            <p>Total de <strong>2</strong> Usuarios Admin</p>
          </Paper>
        </Grid>
      </Grid>





    </React.Fragment>
  );


}