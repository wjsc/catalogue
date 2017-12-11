import React from 'react';
import './FavoritesTab.css';
import FavoritesTabTrack from './FavoritesTabTrack';

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

export default FavoritesTab;