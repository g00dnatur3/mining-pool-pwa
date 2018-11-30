import _Modal from '@material-ui/core/Modal'
import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Cell from '../Cell'

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

class Stats extends React.Component<Props> {
  render() {
    const { classes } = this.props
    return (
    <div className={classes.root}>
      <Grid container spacing={16}>

        <Grid item md={2} sm={4} xs={12}>
          <Cell title={'Pool Hash/s'}>13.13 MSols</Cell>
        </Grid>

        <Grid item md={2} sm={4} xs={12}>
          <Cell title={'Miners'}>248</Cell>
        </Grid>

        <Grid item md={2} sm={4} xs={12}>
          <Cell title={'Workers'}>625</Cell>
        </Grid>

        <Grid item md={2} sm={4} xs={12}>
          <Cell title={'Reward'}>Pay Per Share</Cell>
        </Grid>

        <Grid item md={2} sm={4} xs={12}>
          <Cell title={'Low Fee'}>0.2%</Cell>
        </Grid>

        <Grid item md={2} sm={4} xs={12}>
          <Cell title={'Network Hash/s'}>174.91 MSols</Cell>
        </Grid>

      </Grid>
    </div>
    )
  }
}

// We need an intermediary variable for handling the recursive nesting.
const StyledLayout = withStyles(styles)(Stats);

export default StyledLayout;