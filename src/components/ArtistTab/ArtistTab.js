import React from 'react';
import ArtistTabAlbum from './ArtistTabAlbum';

const ARTISTS_API='http://localhost:3001/artist/';
const ALBUMS_API='http://localhost:3001/album/';

const defaultHeaders={
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

class ArtistTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artist: {},
			albums: []
		};
	}
	componentWillMount(){
		let options={
			method:'GET',
			headers: defaultHeaders
		};	
		fetch(ARTISTS_API+this.props.match.params._id, options)
	    .then((res)=> res.json())
		.then((artist)=>this.setState({artist}))
		.then(() => this.fetchAlbums())
	}
	fetchAlbums(){
		let options={
			method:'GET',
			headers: defaultHeaders
		};	
		this.state.artist.albums.forEach(album => {
			fetch(ALBUMS_API+album, options)
			.then((res)=> res.json())
			.then((album)=>this.setState(prevState => 
				({
					albums: [...prevState.albums.slice(0), album]
				})
			));
		})
		
	}
	renderAlbums(){
		return this.state.albums ? this.state.albums.map((album)=><ArtistTabAlbum key={album.title} album={album}/>):false;
	}
	render() {
		return (
				<div className="tab artist_tab">
					<div className="banner">
						<div className="details_container">
							<div className="name">
								{this.state.name}
							</div>
							<div className="extra">
								{this.state.genre}
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