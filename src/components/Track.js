import React from 'react';
import {insertFavorite} from '../calls.js';
import {formatDuration} from '../lib.js';
import {playerLink} from './playerLink';

class Track extends React.Component {
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
	componentWillReceiveProps(props){
		this.setState({favorite: props.favorite})
	}
	render(){
		return (
			<div className="track">
				<i className="play_track fa fa-play-circle" onClick={() => playerLink.playTrack(this.props.track)}></i>
				<i className="add_track fa fa-plus-circle" onClick={() => playerLink.addTrack(this.props.track)}></i>
				<i className={this.state.favorite ? "fav_track fa fa-heart" : "fav_track fa fa-heart-o"}
					onClick={this.toggleFavorite }></i>
				<div className="track_number">
					{this.props.track.no}
				</div>
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

export default Track;