import React from 'react';
import ArtistCover from '../ArtistCover';

class SearchTabArtist extends React.Component {
	render(){
		return (
			<ArtistCover artist={this.props.artist}/>
		);
	}
}

export default SearchTabArtist;