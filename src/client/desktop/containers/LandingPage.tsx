import {deserialize} from '../../../utils/json'
import * as React from 'react'
import BaseContainer from '../base/BaseContainer'
import BaseState from '../base/BaseState'
import BaseStyle from '../base/BaseStyle'
import qs from 'query-string'
import axios from 'axios'
import Typography from '@material-ui/core/Typography'
import TitleBar from '../components/TitleBar'
import Stats from '../components/landing/Stats'
import Info from '../components/landing/Info'

import getLog from '../../../utils/log'
const log = getLog('LandingPage')

interface State extends BaseState {

}

class Style extends BaseStyle {
	content: React.CSSProperties = {
    width: '80%',
    margin: '0 auto',
	}
	intro: React.CSSProperties = {
		...this.centerRow,
		paddingBottom: 25,
		paddingTop: 25,
		//border: '1px solid red'
	}
}

export class LandingPage extends BaseContainer<{}, State> {
	
	state: State = {loading: true}

	componentDidMount() {
		setTimeout(() => this.setState({loading: false}), 1000)
	}

	renderContent() {
		const style: Style = new Style()
		return (
			<div>
				<TitleBar />

				<div style={style.intro}>
					<img src="/images/Bitcoin_Private_Logo.svg" width="204" style={{paddingRight: 8, marginBottom: 4}}/>
					<Typography variant='title'>Mining Pool</Typography>
				</div>

				<div style={style.content}>

					<Stats />

					<div style={{paddingTop: 25}} />

					<Info />

				</div>

			</div>
		)
	}
	
}