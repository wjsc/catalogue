import React from 'react';
import Track from '../Track';

class FavoritesTabTrack extends React.Component {
	render(){
		delete this.props.track.no;
		return (
			<Track track={this.props.track} favorite={true}/>
		);
	}
}

export default FavoritesTabTrack;