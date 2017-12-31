import React from 'react';
import ArtistTabAlbumTrack from './ArtistTabAlbumTrack';
import AlbumCover from '../AlbumCover';

class ArtistTabAlbum extends React.Component {
	renderTracks(){
		return this.props.tracks ? this.props.tracks.map( track =><ArtistTabAlbumTrack key={track._id} track={track} album={this.props.album} favorite={this.props.favorites.find(f => f.track === track._id)}/>) : false;
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
						<div className="year">
							{this.props.album.year}
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