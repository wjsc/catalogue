import React from 'react';

class PlayerPrev extends React.Component {
	render() {
		return (
				<div className="player_prev fa fa-step-backward" onClick={this.props.onclick}>
				</div>
			);
	}
}

export default PlayerPrev;