import React from 'react';

class PlayerTotalTime extends React.Component {
	render() {
		return (
				<div className="progress-bar-time duration">
					{this.props.value}
				</div>
			);
	}
}

export default PlayerTotalTime;