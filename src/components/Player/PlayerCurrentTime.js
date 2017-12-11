import React from 'react';

class PlayerCurrentTime extends React.Component {
	render() {
		return (
				<div className="progress-bar-time passed">
					{this.props.value}
				</div>
			);
	}
}

export default PlayerCurrentTime;