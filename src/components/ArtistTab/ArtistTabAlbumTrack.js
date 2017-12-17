import React from 'react';
import Track from '../Track';

class ArtistTabAlbumTrack extends React.Component {
	render(){
		return (
			<Track track={this.props.track} favorite={this.props.favorite}/>
		);
	}
}

export default ArtistTabAlbumTrack;