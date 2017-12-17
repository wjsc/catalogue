import React from 'react';
import ArtistTabAlbumTrack from '../ArtistTab/ArtistTabAlbumTrack';

class FavoritesTabTrack extends React.Component {
	render(){
		return (
			<ArtistTabAlbumTrack track={this.props.track} favorite={true}/>
		);
	}
}

export default FavoritesTabTrack;