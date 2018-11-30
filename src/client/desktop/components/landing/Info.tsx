import _Modal from '@material-ui/core/Modal'
import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Cell from '../Cell'
import theme from '../../../theme'
import './Info.css'

import getLog from '../../../../utils/log'
const log = getLog('Modal')

const styles: any = theme => ({
  root: {
    flexGrow: 1,
  },
});

interface Props {
  classes: any
}

class Layout extends React.Component<Props> {
  render() {
    const { classes } = this.props
    const cellStyle = {

    }
    const titleStyle: React.CSSProperties = {
      backgroundColor: theme.palette.grey[200],
      color: 'black',
      fontWeight: 'bold'
    }

    const why = (
      <ul style={{paddingRight: 10, marginLeft: -5}}>
        <li>Your earnings will be more consistent than PPLNS or PROP.</li>
        <li>If the pool finds a block or not, does not matter, you still get paid!</li> 
        <li>PROP sucks because its easy to exploit for Pool Hoppers.</li>
        <li>PPLNS sucks because it short changes you for the first 48-72 hours...

          This is called “ramp up time”, and you are not getting your full rewards until you show “loyalty” to the pool.
          This is where PPLNS cheats you in my opinion.
          What if you need to turn off your miners because electricity is too expensive during certain time of day?
          
        </li>

      </ul>
    )


    return (
    <div className={classes.root}>
      <Grid container spacing={16}>

        <Grid item md={6} sm={12} xs={12}>
          <Cell titleStyle={titleStyle} title={'Why Pay Per Share?'}>
          {why}
          </Cell>
        </Grid>

        <Grid item md={6} sm={12} xs={12}>
          <Cell titleStyle={titleStyle} title={'Connect'}></Cell>
        </Grid>

      </Grid>
    </div>
    )
  }
}

// We need an intermediary variable for handling the recursive nesting.
const StyledLayout = withStyles(styles)(Layout);

export default StyledLayout;