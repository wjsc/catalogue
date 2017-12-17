import React from 'react';

class PlayerNext extends React.Component {
	render() {
		return (
				<div className="player_next fa fa-step-forward" onClick={this.props.onclick}>
				</div>
			);
	}
}

export default PlayerNext;