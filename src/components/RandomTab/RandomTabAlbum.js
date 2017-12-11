import React from 'react';
import AlbumCover from '../AlbumCover';

class RandomTabAlbum extends React.Component {
	render(){
		return (
			<AlbumCover album={this.props.album}/>
		);
	}
}

export default RandomTabAlbum;