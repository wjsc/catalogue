import React from 'react';
import './RandomTab.css';
import RandomTabArtist from './RandomTabArtist';
import RandomTabAlbum from './RandomTabAlbum';
import {fetchPaginatedArtists, fetchPaginatedAlbums} from '../../calls';

class RandomTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artists:[],
			albums:[]
		};
	}
	componentWillMount(){
		fetchPaginatedArtists(null, 20)
		.then( artists => this.setState({
			artists
		}));

		fetchPaginatedAlbums(null, 20)
		.then( albums => this.setState({
			albums
		}))
	}
	renderArtists(){
		return this.state.artists.map((artist)=><RandomTabArtist key={artist._id} artist={artist}/>)
	}
	renderAlbums(){
		return this.state.albums.map((album)=><RandomTabAlbum key={album._id} album={album}/>)	
	}
	render() {
		return (
				<div className="tab random_tab">
					<div className="title"></div>
					<div className="albums">
						<div className="title">Albums</div>
						<div className="results">
							{this.renderAlbums()}
						</div>
					</div>
					<div className="artists">
						<div className="title">Artists</div>
						<div className="results">
							{this.renderArtists()}
						</div>
					</div>
				</div>
			);
	}
}

export default RandomTab;