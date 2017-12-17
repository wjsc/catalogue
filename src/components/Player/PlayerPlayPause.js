import React from 'react';

class PlayerPlayPause extends React.Component {
	render() {
		return (
				<div className={this.props.status ==='play' ? 'player_play fa fa-pause' : 'player_play fa fa-play'} onClick={this.props.onclick}></div>
			);
	}
}

export default PlayerPlayPause;