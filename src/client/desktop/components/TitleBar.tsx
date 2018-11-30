import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import BaseStyle from '../base/BaseStyle'
import AppBar from '@material-ui/core/AppBar'
import SvgIcon from '@material-ui/core/SvgIcon'
import theme from '../../theme'

export interface Props { 
  title?: string | JSX.Element,
  leftIcon?: 'back' | 'menu',
  rightIcon?: 'cart',
  leftClick?: () => void,
  rightClick?: () => void,
  hideSearchBar?: boolean,
  onSearchChange?: (val) => void,
  searchValue?: string,
  onCancelSearch?: () => void
}

class Style extends BaseStyle {
  container: React.CSSProperties = {
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    marginLeft: '0.5%',
    marginRight: '0.5%',
    paddingLeft: '12%',
    paddingRight: '12%'
  }
  toolBar: React.CSSProperties = {
    justifyContent: 'space-between',
  }
  title: React.CSSProperties = {
    fontSize: 24,
    color: 'white',
  }
  icon: React.CSSProperties = {
    width: 36,
    paddingRight: 8
  }
  button: React.CSSProperties = {
    border: '1px solid red'
  }
  badge: React.CSSProperties = {
    marginTop: 6,
    marginRight: 60,
  }
}

interface State {

}

export class TitleBar extends React.Component<Props, {}> {
  
  render(): JSX.Element {

    const style: Style = new Style()

    return (
    <AppBar position="static">

      <div style={style.container}>
        <div style={{...style.row, justifyContent: 'space-between', alignItems: 'center', height: 50}}>
          <div style={style.row}>
            <img src="/images/mining.svg" style={style.icon} />
            <Typography color='inherit' style={{fontWeight: 'bold', fontSize: 20}}>
              MiningFool
            </Typography>
          </div>
          <div>
            {/* Right */}
          </div>
        </div>
        {/* { this.props.leftIcon === 'menu' ? drawer : null } */}
      </div>

      {/* <div style={{...style.row, justifyContent: 'center', marginTop: -60, height: 60, ...style.title, paddingLeft: 2}}>
        <Typography variant='title' color='inherit'>
          {this.props.title}
          <div style={{width: 20}}></div>
        </Typography>
      </div> */}

    </AppBar>
    )
  }
  
}

export default TitleBar