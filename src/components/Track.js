import React from 'react';
import {insertFavorite, removeFavorite} from '../calls.js';
import {formatDuration} from '../lib.js';
import {playerLink} from './playerLink';

class Track extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			received: false,
			favorite: this.props.favorite
		}
		this.toggleFavorite = this.toggleFavorite.bind(this);
		this.isCurrentTrack = this.isCurrentTrack.bind(this);
	}
	toggleFavorite(){
		return this.state.favorite ? 
		removeFavorite('ABCDEABCDEABCDEABCDEABCDEABCDEABCDEF', this.props.track._id)
		.then(res => this.setState( { favorite: false } ))
		: insertFavorite('ABCDEABCDEABCDEABCDEABCDEABCDEABCDEF', this.props.track._id)
		.then(res => this.setState( { favorite: true } ));
	}
	componentWillReceiveProps(nextProps){
		!this.received && this.setState({received: true, favorite: nextProps.favorite});
	}
	isCurrentTrack(){
		return playerLink.getCurrentTrack() && playerLink.getCurrentTrack()._id===this.props.track._id;
	}
	render(){
		return (
			<div className={this.isCurrentTrack()?'current track':'track'} onDoubleClick={() => playerLink.playTrack(this.props.track)}>
				<i className="play_track fa fa-play-circle" onClick={() => playerLink.playTrack(this.props.track)}></i>
				<i className="add_track fa fa-plus-circle" onClick={() => playerLink.addTrack(this.props.track)}></i>
				<i className={this.state.favorite ? "fav_track fa fa-heart" : "fav_track fa fa-heart-o"}
					onClick={this.toggleFavorite }></i>
				<div className="track_number">
					{this.props.track.no}
				</div>
				<div className="track_name">
					{this.props.showArtist && this.props.track.artist.name+' - '}
					{this.props.track.title}
				</div>
				<div className="track_duration">
					{formatDuration(this.props.track.duration)}
				</div>
			</div>
		);
	}
}

export default Track;