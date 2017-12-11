import React from 'react';

class ArtistTabAlbumTrack extends React.Component {
	render(){
		return (
			<div className="track">
				<i className="play_track fa fa-play-circle"></i>
				<i className="add_track fa fa-plus-circle"></i>
				<i className="fav_track fa fa-heart-o"></i>
				<div className="track_name">
					{this.props.track.title}
				</div>
			</div>
		);
	}
}

export default ArtistTabAlbumTrack;