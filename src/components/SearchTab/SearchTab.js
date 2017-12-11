import React from 'react';
import './SearchTab.css';
import SearchTabArtist from './SearchTabArtist';
import SearchTabAlbum from './SearchTabAlbum';
import SearchTabTrack from './SearchTabTrack';

class SearchTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'artists':[
				'Artist-1',
				'Artist-2',
				'Artist-3',
				'Artist-4'
			],
			'albums':[
				'Album-1',
				'Album-2',
				'Album-3',
				'Album-4'
			],
			'tracks':[
				'Track-1',
				'Track-2',
				'Track-3',
				'Track-4',
				'Track-5',
				'Track-6'
			]
		};
	}
	renderArtists(){
		return this.state.artists.map((artist)=><SearchTabArtist key={artist} artist={artist}/>);
	}
	renderAlbums(){
		return this.state.albums.map((album)=><SearchTabAlbum key={album} album={album}/>);
	}
	renderTracks(){
		return this.state.tracks.map((track)=><SearchTabTrack key={track} track={track}/>);
	}
	render() {
		return (
				<div className="tab search_tab">
					<div className="banner">
						<div className="help">Type to find music</div>
						<input className="search" placeholder="Search" pattern=".{3,25}" type="text"/>
					</div>
					<div className="all-results">
						<div className="artists">
							<div className="title">Artists</div>
							<div className="results">
								{this.renderArtists()}
							</div>
						</div>
						<div className="albums">
							<div className="title">Albums</div>
							<div className="results">
								{this.renderAlbums()}
							</div>
						</div>
						<div className="tracks">
							<div className="title">Tracks</div>
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