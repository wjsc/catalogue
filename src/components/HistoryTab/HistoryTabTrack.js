import React from 'react';
import ArtistTabAlbumTrack from '../ArtistTab/ArtistTabAlbumTrack';

class HistoryTabTrack extends React.Component {
	render(){
		return (
			<ArtistTabAlbumTrack track={this.props.track}/>
		);
	}
}

export default HistoryTabTrack;