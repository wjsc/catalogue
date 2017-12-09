import React from 'react';
import { HashRouter, Link, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';

const STATIC_URL='http://localhost:3002/';
const ARTISTS_API='http://localhost:3001/artists/';
const ALBUMS_API='http://localhost:3001/albums/';
const TRACKS_API='http://localhost:3001/tracks/';

const defaultHeaders={
					'Accept': 'application/json',
					'Content-Type': 'application/json'
			    };

class CatalogueApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
	    return (
	    	<div className="catalogue">
				<Sidebar/>
				<TabPanel/>
				<Player/>
			</div>
		);
	}
}

class Sidebar extends React.Component {
	render() {
		return (
			<div className="sidebar">
				<Link to="/search"><SidebarElement id="sidebar-search" icon="fa fa-search" text="Search"/></Link>
				<Link to="/favorites"><SidebarElement id="sidebar-favorites" icon="fa fa-heart" text="Favorites"/></Link>
				<Link to="/history"><SidebarElement id="sidebar-history" icon="fa fa-suitcase" text="History"/></Link>
				<Link to="/logout"><SidebarElement id="sidebar-logout" icon="" text="Logout"/></Link>
			</div>
		);
	}
}

class SidebarElement extends React.Component {
	render() {
		return (
			<div className="sidebar-element" id={this.props.id}>
				<i className={this.props.icon}></i>
				<span>{this.props.text}</span>
			</div>
		);
	}
}

class TabPanel extends React.Component {
	
	render() {
		return (
			<div className="tabPanel">
				<Switch>
				      <Route exact path='/' component={RandomTab}/>
				      <Route path='/search' component={SearchTab}/>
				      <Route path='/favorites' component={FavoritesTab}/>
				      <Route path='/history' component={HistoryTab}/>
				      <Route path='/artist/:_id' component={ArtistTab}/>
				      <Route path='/album/:_id' component={AlbumTab}/>
			    </Switch>
			</div>
		);
	}
}

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

class RandomTabArtist extends React.Component {
	render(){
		return (
			<ArtistCover artist={this.props.artist}/>
		);
	}
}

class RandomTabAlbum extends React.Component {
	render(){
		return (
			<AlbumCover album={this.props.album}/>
		);
	}
}

class ArtistTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillMount(){
		let options={
			method:'GET',
			headers: defaultHeaders
		};	
		fetch(ARTISTS_API+this.props.match.params._id, options)
	    .then((res)=> res.json())
	    .then((artist)=>this.setState(artist));
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

class ArtistTabAlbum extends React.Component {
	renderTracks(tracks){
		return tracks.map((track)=><ArtistTabAlbumTrack key={track.title} track={track}/>);
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

class ArtistTabAlbumTrack extends React.Component {
	render(){
		return (
			<div className="track">
				<i className="play_track fa fa-play-circle"></i>
				<i className="add_track fa fa-plus-circle"></i>
				<i className="fav_track fa fa-heart-o"></i>
				<div className="track_name">
					{this.props.track.title}
				</div>
			</div>
		);
	}
}

class AlbumTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillMount(){
		let options={
			method:'GET',
			headers: defaultHeaders
		};	
		fetch(ALBUMS_API+this.props.match.params._id, options)
	    .then((res)=> res.json())
	    .then((album)=>this.setState(album));
	}
	renderTracks(){
		return this.state.tracks ? this.state.tracks.map((track)=><AlbumTabTrack key={track} track={track}/>):false;
	}
	render() {
		return (
				<div className="tab album_tab">
					<div className="banner">
						<div className="cover_container">
							<AlbumCover album={this.state}/>
						</div>
						<div className="details_container">
							<div className="year">
								{this.state.artistId} - {this.state.year}
							</div>
							<div className="name">
								{this.state.title}
							</div>
							<div className="play play_album">
								Play
							</div>
						</div>
					</div>
					<div className="sub_banner">
					</div>
					<div className="tracks">
						{this.renderTracks()}
					</div>
				</div>
			);
	}
}

class AlbumTabTrack extends React.Component {
	render(){
		return (
			<div className="track">
				<i className="play_track fa fa-play-circle">
				</i>
				<i className="add_track fa fa-plus-circle">
				</i>
				<i className="fav_track fa fa-heart-o">
				</i>
				<div className="track_number">
					{this.props.track.no}
				</div>
				<div className="track_name">
					{this.props.track.title}
				</div>
				<div className="track_length">
					{this.props.track.length}
				</div>
			</div>
		);
	}
}

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

class SearchTabArtist extends React.Component {
	render(){
		return (
			<ArtistCover artist={this.props.artist}/>
		);
	}
}

class SearchTabAlbum extends React.Component {
	render(){
		return (
			<AlbumCover album={this.props.album}/>
		);
	}
}

class SearchTabTrack extends React.Component {
	render(){
		return (
			<ArtistTabAlbumTrack track={this.props.track}/>
		);
	}
}

class FavoritesTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'tracks':[
				'Track-1',
				'Track-2',
				'Track-3',
				'Track-4',
				'Track-5',
				'Track-6',
				'Track-7',
				'Track-8',
				'Track-9',
				'Track-10'
			]
		};
	}
	renderTracks(){
		return this.state.tracks.map((track)=><FavoritesTabTrack key={track} track={track}/>);
	}
	render() {
		return (
				<div className="tab favorites_tab">
					<div className="banner">
						<div className="details_container">
							<div className="name">
								FavoritesTab
							</div>
							<div className="play">
								Play
							</div>
						</div>
					</div>
					<div className="sub_banner">
						{this.state.tracks.length} tracks in Favorites
					</div>
					<div className="tracks">
						{this.renderTracks()}
					</div>
				</div>
			);
	}
}

class FavoritesTabTrack extends React.Component {
	render(){
		return (
			<ArtistTabAlbumTrack track={this.props.track}/>
		);
	}
}

class HistoryTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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
	renderTracks(){
		return this.state.tracks.map((track)=><HistoryTabTrack key={track} track={track}/>);
	}
	render() {
		return (
				<div className="tab history_tab">
					<div className="banner">
						<div className="details_container">
							<div className="name">
								HistoryTab
							</div>
							<div className="play">
								Play
							</div>
						</div>
					</div>
					<div className="sub_banner">
						{this.state.tracks.length} tracks in History
					</div>
					<div className="tracks">
						{this.renderTracks()}
					</div>
				</div>
			);
	}
}

class HistoryTabTrack extends React.Component {
	render(){
		return (
			<ArtistTabAlbumTrack track={this.props.track}/>
		);
	}
}

class ArtistCover extends React.Component {
	render() {
		return (
				<Link to={"/artist/"+this.props.artist._id}>
					<div className="artist">
						<div className="placeholder fa fa-microphone">
						</div>
						<div className="name">
							{this.props.artist.name}
						</div>	
					</div>
				</Link>
			);
	}
}

class AlbumCover extends React.Component {
	render() {
		this.props.album.coverSrc='http://www.progarchives.com/progressive_rock_discography_covers/2731/cover_46241429102011_r.JPG';
		return (
			<Link to={"/album/"+this.props.album._id}>
				<div className="album" title={this.props.album.title}>
					<img className="cover" alt='Album Cover' src={this.props.album.coverSrc}/>
				</div>
			</Link>
			);
	}
}

class Player extends React.Component {
  	constructor(props) {
		super(props);
		this.state = {
			trackTitle: 'Lago de forma mía',
			album:{
				title:'AAA',
				_id:'EEE',
				coverSrc:'III'
			},
			currentTime: 100,
			totalTime: 200,
			volume: 1
		};
	}
	render() {
		return (
				<div className="player">
					<PlayerPrev/>
					<PlayerPlayPause/>
					<PlayerNext/>
					<div className="player_timeline">
						<PlayerAlbumCover album={this.state.album}/>
						<div className="player_track_container">
							<PlayerTrackTitle title={this.state.trackTitle}/>
							<div className="player_progress">
								<PlayerCurrentTime value={this.state.currentTime}/>
								<PlayerProgress value={this.state.currentTime/this.state.totalTime}/>
								<PlayerTotalTime value={this.state.totalTime}/>
							</div>
						</div>
					</div>
					<PlayerVolume value={this.state.volume}/>
				</div>
			);
	}
}

class PlayerPrev extends React.Component {
	render() {
		return (
				<div className="player_prev fa fa-step-backward">
				</div>
			);
	}
}

class PlayerPlayPause extends React.Component {
	render() {
		return (
				<div className="player_play fa fa-play">
				</div>
			);
	}
}

class PlayerNext extends React.Component {
	render() {
		return (
				<div className="player_next fa fa-step-forward">
				</div>
			);
	}
}

class PlayerAlbumCover extends React.Component {
	render() {
		return (
				<div className="player_track_cover">
					<AlbumCover album={this.props.album}/>
				</div>
			);
	}
}

class PlayerTrackTitle extends React.Component {
	render() {
		return (
				<div className="player_track">
					<div className="name">
						{this.props.title}
					</div>
				</div>
			);
	}
}

class PlayerCurrentTime extends React.Component {
	render() {
		return (
				<div className="progress-bar-time passed">
					{this.props.value}
				</div>
			);
	}
}

class PlayerProgress extends React.Component {
	render() {
		return (
				<div className="progress-bar-wrapper">
					<div className="progress-bar">
					</div>
				</div>
			);
	}
}

class PlayerTotalTime extends React.Component {
	render() {
		return (
				<div className="progress-bar-time duration">
					{this.props.value}
				</div>
			);
	}
}

class PlayerVolume extends React.Component {
	render() {
		return (
			<div className="player_volume">
				<div className="slider_container">
					<div className="slider"/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<HashRouter>
		 <CatalogueApp/>
	</HashRouter>
  ,
  document.getElementById('root')
);