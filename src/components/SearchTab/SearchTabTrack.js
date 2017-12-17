import React from 'react';
import ArtistTabAlbumTrack from '../ArtistTab/ArtistTabAlbumTrack';

class SearchTabTrack extends React.Component {
	render(){
		return (
			<ArtistTabAlbumTrack track={this.props.track} favorite={this.props.favorite}/>
		);
	}
}

export default SearchTabTrack;