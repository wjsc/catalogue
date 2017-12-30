import React from 'react';

class PlayerProgress extends React.Component {
	render() {
		return (
				<div className="progress-bar-wrapper" onClick={(ev) => this.props.onclick((ev.pageX - ev.target.offsetLeft) / ev.target.offsetWidth * this.props.duration) }>
					<div className="progress-bar" style={{width: (this.props.progress / this.props.duration*100)+'%'}}></div>
				</div>
			);
	}
}

export default PlayerProgress;