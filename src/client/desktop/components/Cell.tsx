import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import BaseStyle from '../base/BaseStyle'
import theme from '../../theme'

interface Props {
  style?: React.CSSProperties,
  title?: string,
  titleStyle?: React.CSSProperties,
}

class Style extends BaseStyle {
  container: React.CSSProperties = {
    width: '100%',
    minHeight: 100,
    //border: '1px solid red', 
  }
  title: React.CSSProperties = {
    ...this.centerColumn,
    width: '100%', height: 45,
    //border: '1px solid red',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    color: 'white',
    backgroundColor: theme.palette.secondary.main
  }
  content: React.CSSProperties = {
    ...this.centerColumn,
    width: '100%', minHeight: 55,
    //border: '1px solid red',
  }
}

export class Cell extends React.Component<Props, {}> {
  render(): JSX.Element {
    const style = new Style()

    if (!this.props.title) style.content.height = '100%'

    const title = this.props.title ? ( 
      <div style={{...style.title, ...this.props.titleStyle}}>
        <Typography color='inherit' style={this.props.titleStyle}>
          {this.props.title}
        </Typography>
      </div>
    ) : null

    const content = (
      <div style={style.content}>
        <Typography>
          {this.props.children}
        </Typography>
      </div>
    )

    return (
    <Paper style={{borderRadius: 8}}>
      <div style={{...style.container, ...this.props.style}}>
        {title}
        {title ? <Divider /> : null}
        {content}
      </div>
    </Paper>
    )
  }
}

export default Cell