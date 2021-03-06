import React from 'react';
import {insertFavorite, removeFavorite} from '../calls.js';
import {formatDuration} from '../lib.js';
import {playerLink} from './playerLink';

class Track extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			favorite: null,
			favoriteReceived: this.props.favorite
		}
		this.toggleFavorite = this.toggleFavorite.bind(this);
		this.isCurrentTrack = this.isCurrentTrack.bind(this);
		this.isFavorited = this.isFavorited.bind(this);
	}
	toggleFavorite(){
		return this.isFavorited() ? 
		removeFavorite(this.props.track._id)
		.then(res => this.setState( { favorite: false } ))
		: insertFavorite(this.props.track._id)
		.then(res => this.setState( { favorite: true } ));
	}
	componentWillReceiveProps(nextProps){
		nextProps.favorite !== this.state.favoriteReceived && this.setState({favoriteReceived: nextProps.favorite});
	}
	isCurrentTrack(){
		return playerLink.getCurrentTrack() && playerLink.getCurrentTrack()._id===this.props.track._id;
	}
	isFavorited(){
		return this.state.favorite !== null ? this.state.favorite : this.state.favoriteReceived;
	}
	render(){
		return (
			<div className={this.isCurrentTrack()?'current track':'track'} onDoubleClick={() => playerLink.playTrack(this.props.track)}>
				<i onDoubleClick={ev => ev.stopPropagation()} className="play_track fa fa-play-circle" onClick={() => playerLink.playTrack(this.props.track)}></i>
				<i onDoubleClick={ev => ev.stopPropagation()} className="add_track fa fa-plus-circle" onClick={() => playerLink.addTrack(this.props.track)}></i>
				<i onDoubleClick={ev => ev.stopPropagation()} className={this.isFavorited() ? "fav_track fa fa-heart" : "fav_track fa fa-heart-o"}
					onClick={this.toggleFavorite }></i>
				{ this.props.showNo ? <div className="track_number">{this.props.track.no}</div> : false}
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