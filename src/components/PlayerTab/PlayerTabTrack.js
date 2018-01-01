import React from 'react';
import Track from '../Track';

class PlayerTabTrack extends React.Component {
	render(){
		return (
			<Track track={this.props.track} favorite={this.props.favorite} showArtist={true}/>
		);
	}
}

export default PlayerTabTrack;