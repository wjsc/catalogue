import React from 'react';
import './PlayerTab.css';
import Track from '../Track';
import {playerLink} from '../playerLink';
import {fetchHistory, fetchTrack, checkFavorites} from '../../calls.js';

class PlayerTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			view: 'next',
			tracks : [],
			favorites: []
		};
		this.setPlayerTracks = this.setPlayerTracks.bind(this);
		this.setHistory = this.setHistory.bind(this);
		this.setFavorites = this.setFavorites.bind(this);
	}
	componentDidMount(){
		this.setPlayerTracks();
	}
	setPlayerTracks() {
		this.setState( { view: 'next', tracks: playerLink.getTracks()} , 
			this.setFavorites(this.state.tracks.map(t => t._id).join(','))
		);
	}
	setHistory() {
		fetchHistory('ABCDEABCDEABCDEABCDEABCDEABCDEABCDEF')
		.then( history => {
			this.setFavorites(history.map(h => h.track).join(','));
			fetchTrack(history.map(h => h.track).join(','))
			.then( tracks => tracks.map(t => { t.date = history.find(h => h.track === t._id).date; return t;}))
			.then( tracks => tracks.sort((a, b ) => a.date < b.date ? 1 : -1))
			.then( tracks => this.setState({view: 'history', tracks}));
		})
	}
	setFavorites(tracks) {
		checkFavorites('ABCDEABCDEABCDEABCDEABCDEABCDEABCDEF', tracks)
		.then( favorites => this.setState({favorites}));
	}
	renderTracks(tracks){
		return tracks ? tracks.map((track)=><Track key={track._id} track={track} showArtist={true} favorite={this.state.favorites.find(f => f.track===track._id)}/>) : false;
	}
	render() {
		return (
				<div className="tab player_tab">
					<div className="views">
						<div className={this.state.view==='history'?'active':''} onClick={this.setHistory}>History</div>
						<div className={this.state.view==='next'?'active':''} onClick={this.setPlayerTracks}>Next</div>
					</div>
					<div className="tracks">
						{this.renderTracks(this.state.tracks)}
					</div>
				</div>
			);
	}
}

export default PlayerTab;