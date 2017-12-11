import React from 'react';
import './RandomTab.css';
import RandomTabArtist from './RandomTabArtist';
import RandomTabAlbum from './RandomTabAlbum';

const defaultHeaders={
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};
const ARTISTS_API='http://localhost:3001/artist/';
const ALBUMS_API='http://localhost:3001/album/';

class RandomTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artists:[],
			albums:[]
		};
	}
	componentWillMount(){
		let options={
			method:'GET',
			headers: defaultHeaders
		};	
		fetch(ARTISTS_API, options)
	    .then((res)=> res.json())
	    .then((artists)=>this.setState({artists: artists}));

	    fetch(ALBUMS_API, options)
	    .then((res)=> res.json())
	    .then((albums)=>this.setState({albums: albums}));
	}
	renderRandomArtists(){
		return this.state.artists.map((artist)=><RandomTabArtist key={artist.name} artist={artist}/>)
	}
	renderRandomAlbums(){
		return this.state.albums.map((album)=><RandomTabAlbum key={album.title} album={album}/>)	
	}
	render() {
		return (
				<div className="tab random_tab">
					<div className="title">RandomTab</div>
					<div className="artists">
						<div className="title">Artists</div>
						<div className="results">
							{this.renderRandomArtists()}
						</div>
					</div>
					<div className="albums">
						<div className="title">Albums</div>
						<div className="results">
							{this.renderRandomAlbums()}
						</div>
					</div>
				</div>
			);
	}
}

export default RandomTab;