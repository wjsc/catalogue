import React from 'react';
import './SearchTab.css';
import SearchTabArtist from './SearchTabArtist';
import SearchTabAlbum from './SearchTabAlbum';
import SearchTabTrack from './SearchTabTrack';
import {searchArtists, searchAlbums, searchTracks} from '../../calls';

class SearchTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artists :[],
			albums :[],
			tracks :[]
		};
		this.search = this.search.bind(this);

	}
	search(ev) {
		if (ev.key === 'Enter') {
			searchArtists(ev.target.value).then( artists => this.setState({artists}));
			searchAlbums(ev.target.value).then( albums => this.setState({albums}));
			searchTracks(ev.target.value).then( tracks => this.setState({tracks}));	
		}
	}
	renderArtists(){
		return this.state.artists ? this.state.artists.map( artist =><SearchTabArtist key={artist} artist={artist}/>) : false;
	}
	renderAlbums(){
		return this.state.albums ? this.state.albums.map( album =><SearchTabAlbum key={album} album={album}/>) : false;
	}
	renderTracks(){
		return this.state.tracks ? this.state.tracks.map( track =><SearchTabTrack key={track} track={track}/>) : false;
	}
	render() {
		return (
				<div className="tab search_tab">
					<div className="banner">
						<div className="help">Type to find music</div>
						<input className="search" onKeyPress={this.search} placeholder="Search" pattern=".{3,25}" type="text"/>
					</div>
					<div className="all-results">
						<div className="artists">
							<div className="title">{this.state.artists.length +' artists'}</div>
							<div className="results">
								{this.renderArtists()}
							</div>
						</div>
						<div className="albums">
							<div className="title">{this.state.artists.length +' albums'}</div>
							<div className="results">
								{this.renderAlbums()}
							</div>
						</div>
						<div className="tracks">
							<div className="title">{this.state.artists.length +' tracks'}</div>
							<div className="results">
								{this.renderTracks()}
							</div>
						</div>
					</div>
				</div>
			);
	}
}

export default SearchTab;