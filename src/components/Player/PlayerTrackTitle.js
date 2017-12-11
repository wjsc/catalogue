import React from 'react';

class PlayerTrackTitle extends React.Component {
	render() {
		return (
				<div className="player_track">
					<div className="name">
						{this.props.title}
					</div>
				</div>
			);
	}
}

export default PlayerTrackTitle;