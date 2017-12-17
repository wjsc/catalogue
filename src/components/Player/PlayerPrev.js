import React from 'react';

class PlayerPrev extends React.Component {
	render() {
		return (
				<div className={this.props.active ? 'player_prev fa fa-step-backward' : 'player_prev fa fa-step-backward inactive'} onClick={this.props.onclick}></div>
			);
	}
}

export default PlayerPrev;