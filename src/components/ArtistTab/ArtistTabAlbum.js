import React from 'react';
import ArtistTabAlbumTrack from './ArtistTabAlbumTrack';
import AlbumCover from '../AlbumCover';
import {fetchTracksByAlbum, checkFavorites} from '../../calls.js';

class ArtistTabAlbum extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tracks: [],
			favorites: []
		};
	}
	renderTracks(tracks){
		return this.state.tracks ? this.state.tracks.map( track =><ArtistTabAlbumTrack key={track._id} track={track} favorite={this.state.favorites.find(f => f.track===track._id)}/>) : false;
	}
	componentDidMount(){
		// TODO: Sync Bug
		fetchTracksByAlbum(this.props.album._id)
		.then( tracks => this.setState({tracks}));
		checkFavorites('ABCDEABCDEABCDEABCDEABCDEABCDEABCDEF', this.props.album.tracks.join(','))
		.then( favorites => this.setState({favorites}));

	}
	render(){
		return (
			<div className="album">
					<div className="cover_container">
						<div className="cover">
							<AlbumCover album={this.props.album}/>
						</div>
					</div>
					<div className="details">
						<div className="title">
							{this.props.album.title}
						</div>
						<div className="tracks">
							{this.renderTracks()}
						</div>
					</div>
			</div>
		);
	}
}

export default ArtistTabAlbum;