import React from 'react';
import {insertFavorite} from '../../calls.js';
import {formatDuration} from '../../lib.js';

class ArtistTabAlbumTrack extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			favorite: false
		}
		this.toggleFavorite = this.toggleFavorite.bind(this);
	}
	toggleFavorite(){
		insertFavorite('ABCDEABCDEABCDEABCDEABCDEABCDEABCDEF', this.props.track._id)
		.then(res => this.setState(prevState => {
			return {
				favorite: !prevState.favorite
			}
		}));
		
	}
	componentWillReceiveProps(nextProps){
		nextProps !== this.props ? this.setState({favorite: nextProps.favorite}) : false;
	}
	render(){
		return (
			<div className="track">
				<i className="play_track fa fa-play-circle"></i>
				<i className="add_track fa fa-plus-circle"></i>
				<i className={this.state.favorite ? "fav_track fa fa-heart" : "fav_track fa fa-heart-o"} 
					onClick={this.toggleFavorite}></i>
				<div className="track_name">
					{this.props.track.title}
				</div>
				<div className="track_duration">
					{formatDuration(this.props.track.duration)}
				</div>
			</div>
		);
	}
}

export default ArtistTabAlbumTrack;