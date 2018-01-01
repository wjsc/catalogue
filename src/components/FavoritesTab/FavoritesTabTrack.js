import React from 'react';
import Track from '../Track';

class FavoritesTabTrack extends React.Component {
	render(){
		return (
			<Track track={this.props.track} favorite={true} showArtist={true}/>
		);
	}
}

export default FavoritesTabTrack;