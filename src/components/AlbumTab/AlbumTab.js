import React from 'react';
import './AlbumTab.css';
import {playerLink} from '../playerLink';
import AlbumTabTrack from './AlbumTabTrack';
import AlbumCover from '../AlbumCover';
import {fetchAlbum, fetchTracksByAlbum, checkFavorites} from '../../calls.js';

class AlbumTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			album: {},
			tracks: [],
			favorites: []
		};
	}
	componentWillMount(){
		fetchAlbum(this.props.match.params._id)
		.then(album => this.setState({album}))
		.then( () => checkFavorites('ABCDEABCDEABCDEABCDEABCDEABCDEABCDEF', this.state.album.tracks.join(',')))
		.then( favorites => this.setState({favorites}));

		fetchTracksByAlbum(this.props.match.params._id)
		.then(tracks => this.setState({tracks}));
	}
	renderTracks(){
		return this.state.tracks ? this.state.tracks.map((track)=><AlbumTabTrack key={track._id} track={track} favorite={this.state.favorites.find(f => f.track===track._id)}/>):false;
	}
	render() {
		return (
				<div className="tab album_tab">
					<div className="banner">
						<div className="cover_container">
							<AlbumCover album={this.state.album}/>
						</div>
						<div className="details_container">
							<div className="year">
								{this.state.album && this.state.album.year}
							</div>
							<div className="name">
								{this.state.album && this.state.album.title}
							</div>
							<div className="play play_album" onClick={() => playerLink.playTracks(this.state.tracks)}>
								Play
							</div>
						</div>
					</div>
					<div className="sub_banner">
					</div>
					<div className="tracks">
						{this.renderTracks()}
					</div>
				</div>
			);
	}
}

export default AlbumTab;