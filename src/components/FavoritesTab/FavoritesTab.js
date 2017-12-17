import React from 'react';
import './FavoritesTab.css';
import FavoritesTabTrack from './FavoritesTabTrack';
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
		return this.state.tracks ? this.state.tracks.map((track)=><FavoritesTabTrack key={track._id} track={track}/>) : false;
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

export default FavoritesTab;