import React from 'react';
import './ArtistTab.css';
import ArtistTabAlbum from './ArtistTabAlbum';
import {fetchArtist, fetchAlbumsByArtist} from '../../calls.js';

class ArtistTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artist: {},
			albums: []
		};
	}
	componentWillMount(){
		fetchArtist(this.props.match.params._id)
		.then(artist => this.setState({artist}));
		fetchAlbumsByArtist(this.props.match.params._id)
		.then(albums => this.setState({albums}));
	}
	renderAlbums(){
		return this.state.albums ? this.state.albums.map( album => <ArtistTabAlbum key={album._id} album={album} />) : false;
	}
	render() {
		return (
				<div className="tab artist_tab">
					<div className="banner">
						<div className="details_container">
							<div className="name">
								{this.state.artist.name}
							</div>
							<div className="extra">
								{this.state.artist.genre}
							</div>
							<div className="play">
								Play
							</div>
						</div>
					</div>
					<div className="sub_banner">
						{this.state.albums ? this.state.albums.length:0} albums indexed
					</div>
					<div className="albums">
						{this.renderAlbums()}
					</div>
				</div>
			);
	}
}

export default ArtistTab;