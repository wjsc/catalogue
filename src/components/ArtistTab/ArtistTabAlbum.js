import React from 'react';
import ArtistTabAlbumTrack from './ArtistTabAlbumTrack';
import AlbumCover from '../AlbumCover';

class ArtistTabAlbum extends React.Component {
	renderTracks(tracks){
		return tracks ? tracks.map((track)=><ArtistTabAlbumTrack key={track.title} track={track}/>) : '';
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
							{this.renderTracks(this.props.album.tracks)}
						</div>
					</div>
			</div>
		);
	}
}

export default ArtistTabAlbum;