import React from 'react';
import './FavoritesTab.css';
import {Translate} from '../lang/Translate';
import {config} from '../../config/default.js';
import {playerLink} from '../playerLink';
import Track from '../Track';
import {fetchPaginatedFavorites, fetchTracks} from '../../calls.js';

class FavoritesTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			 tracks : []
		};
	}
	componentDidMount(){
		fetchPaginatedFavorites(0, config.favorites_tab.favorites_limit)
		.then( favorites => favorites.map(favorite => favorite.track ))
		.then( tracks => tracks.join(','))
		.then( tracks => tracks && fetchTracks(tracks))
		.then( tracks => this.setState({tracks}));
	}
	renderTracks(){
		return this.state.tracks ? this.state.tracks.map((track)=><Track key={track._id} showArtist={true} track={track} favorite={true}/>) : false;
	}
	render() {
		return (
				<div className="tab favorites_tab">
					<div className="banner">
						<div className="details_container">
							<div className="name">
								<Translate word='FAVORITES'/>
							</div>
							<div className="play" onClick={() => playerLink.playTracks(this.state.tracks)}>
								<Translate word='PLAY'/>
							</div>
						</div>
					</div>
					<div className="sub_banner">
						{this.state.tracks.length} <Translate word='TRACKS_FAVORITED'/>
					</div>
					<div className="tracks">
						{this.renderTracks()}
					</div>
				</div>
			);
	}
}

export default FavoritesTab;