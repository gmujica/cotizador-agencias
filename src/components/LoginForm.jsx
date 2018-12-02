import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import PersonOutline from '@material-ui/icons/PersonOutline'
import LockOpen from '@material-ui/icons/LockOpen'
import {
  Grid,
  Paper,
  IconButton,
  InputLabel,
  Input,
  InputAdornment,
  FormControl,
  TextField,
  Button
} from '@material-ui/core/'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});
/*
const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];
*/
class LoginForm extends React.Component {
  state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    return (    
      <div className={classes.root}>
      <Paper>
        <Grid container spacing={8} alignItems="center">
          <Grid item>
            <PersonOutline />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="User" />
          </Grid>
        </Grid>
        <Grid container spacing={8} alignItems="center">
          <Grid item>
            <LockOpen />
          </Grid>
          <Grid item>
            <FormControl className={classNames(classes.margin, classes.textField)}>
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              id="adornment-password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item>
            <Button variant="outlined" className={classes.button}>
              Login
            </Button>
          </Grid>
        </Grid>
        </Paper>  
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm)