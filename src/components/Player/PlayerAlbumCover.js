import React from 'react';
import AlbumCover from '../AlbumCover';

class PlayerAlbumCover extends React.Component {
	render() {
		return (
				<div className="player_track_cover">
					<AlbumCover album={this.props.album}/>
				</div>
			);
	}
}

export default PlayerAlbumCover;