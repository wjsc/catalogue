import React from 'react';
import AlbumCover from '../AlbumCover';

class SearchTabAlbum extends React.Component {
	render(){
		return (
			<AlbumCover album={this.props.album}/>
		);
	}
}

export default SearchTabAlbum;