import React from 'react';
import ArtistTabAlbumTrack from './ArtistTabAlbumTrack';
import AlbumCover from '../AlbumCover';
import {fetchTracksByAlbum} from '../../calls.js';

class ArtistTabAlbum extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tracks: []
		};
	}
	renderTracks(tracks){
		return this.state.tracks ? this.state.tracks.map( track =><ArtistTabAlbumTrack key={track._id} track={track}/>) : false;
	}
	componentDidMount(){
		fetchTracksByAlbum(this.props.album._id)
		.then(tracks => this.setState({tracks}));
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