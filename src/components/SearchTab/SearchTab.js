import React from 'react';
import './SearchTab.css';
import {translate} from '../lang/Translate';
import SearchTabArtist from './SearchTabArtist';
import SearchTabAlbum from './SearchTabAlbum';
import Track from '../Track';
import {searchArtists, searchAlbums, searchTracks, checkFavorites} from '../../calls';

class SearchTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searched: false,
			artists :[],
			albums :[],
			tracks :[],
			favorites: []
		};
		this.search = this.search.bind(this);

	}
	search(ev) {
		if (ev.key === 'Enter') {
			searchArtists(ev.target.value).then( artists => this.setState({artists}));
			searchAlbums(ev.target.value).then( albums => this.setState({albums}));
			searchTracks(ev.target.value).then( tracks => this.setState({tracks}))
			.then(() => this.state.tracks.length && checkFavorites(this.state.tracks.map(t => t._id).join(','))
			.then( favorites => this.setState({favorites})))
			this.setState({searched: true});
		}
	}
	renderArtists(){
		return this.state.artists ? this.state.artists.map( artist =><SearchTabArtist key={artist._id} artist={artist}/>) : false;
	}
	renderAlbums(){
		return this.state.albums ? this.state.albums.map( album =><SearchTabAlbum key={album._id} album={album}/>) : false;
	}
	renderTracks(){
		console.log(this.state.tracks);
		return this.state.tracks ? this.state.tracks.map( track =><Track showArtist={true} key={track._id} track={track} favorite={this.state.favorites.find(f => f.track===track._id)} />) : false;
	}
	render() {
		return (
				<div className="tab search_tab">
					<div className="banner">
						<input className="search" tabIndex="1" onKeyPress={this.search} placeholder={translate('SEARCH_INPUT')} pattern=".{3,25}" type="text"/>
					</div>
					{this.renderResults()}
				</div>
			);
	}
	renderResults(){
		return this.state.searched ? 
			<div className="all-results">
				<div className="artists">
					<div className="title">{this.state.artists ? this.state.artists.length +' artists' : false}</div>
					<div className="results">
						{this.renderArtists()}
					</div>
				</div>
				<div className="albums">
					<div className="title">{this.state.albums ? this.state.albums.length +' albums' : false}</div>
					<div className="results">
						{this.renderAlbums()}
					</div>
				</div>
				<div className="tracks">
					<div className="title">{this.state.tracks ? this.state.tracks.length +' tracks' : false}</div>
					<div className="results">
						{this.renderTracks()}
					</div>
				</div>
			</div>
		: false;
	}
}

export default SearchTab;