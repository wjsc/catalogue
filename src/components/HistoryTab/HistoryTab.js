import React from 'react';
import HistoryTabTrack from './HistoryTabTrack';

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

export default HistoryTab;