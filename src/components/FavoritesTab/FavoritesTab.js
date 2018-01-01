import React from 'react';
import './FavoritesTab.css';
import {playerLink} from '../playerLink';
import Track from '../Track';
import {fetchFavorites, fetchTrack} from '../../calls.js';

class FavoritesTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			 tracks : []
		};
	}
	componentDidMount(){
		fetchFavorites('ABCDEABCDEABCDEABCDEABCDEABCDEABCDEF')
		.then( favorites => favorites.map(favorite => favorite.track ))
		.then( tracks => tracks.join(','))
		.then( tracks => fetchTrack(tracks))
		.then( tracks => this.setState({tracks}));
	}
	renderTracks(){
		return this.state.tracks ? this.state.tracks.map((track)=><Track key={track._id} showArtist={true} track={track}/>) : false;
	}
	render() {
		return (
				<div className="tab favorites_tab">
					<div className="banner">
						<div className="details_container">
							<div className="name">
								FavoritesTab
							</div>
							<div className="play" onClick={() => playerLink.playTracks(this.state.tracks)}>
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

export default FavoritesTab;