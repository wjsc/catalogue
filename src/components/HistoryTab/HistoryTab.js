import React from 'react';
import './HistoryTab.css';
import HistoryTabTrack from './HistoryTabTrack';
import {fetchHistory, fetchTrack, checkFavorites} from '../../calls.js';

class HistoryTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			 tracks :[],
			 favorites: []
		};
	}
	componentDidMount(){
		fetchHistory('ABCDEABCDEABCDEABCDEABCDEABCDEABCDEF')
		.then( history => history.map(history => history.track ))
		.then( tracks => tracks.join(','))
		.then( tracks => {
			checkFavorites('ABCDEABCDEABCDEABCDEABCDEABCDEABCDEF', tracks)
			.then( favorites => this.setState({favorites}));
			fetchTrack(tracks)
			.then( tracks => this.setState({tracks}));
		})
		
	}
	renderTracks(){
		return this.state.tracks ? this.state.tracks.map((track)=><HistoryTabTrack key={track._id} track={track} favorite={this.state.favorites.find(f => f.track===track._id)}/>) : false;
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

export default HistoryTab;