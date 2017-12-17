import React from 'react';
import {insertFavorite} from '../../calls.js';

class ArtistTabAlbumTrack extends React.Component {
	render(){
		return (
			<div className="track">
				<i className="play_track fa fa-play-circle"></i>
				<i className="add_track fa fa-plus-circle"></i>
				<i className="fav_track fa fa-heart-o" onClick={() => insertFavorite('ABCDEABCDEABCDEABCDEABCDEABCDEABCDEF', this.props.track._id)}></i>
				<div className="track_name">
					{this.props.track.title}
				</div>
				<div className="track_duration">
					{this.props.track.duration}
				</div>
			</div>
		);
	}
}

export default ArtistTabAlbumTrack;