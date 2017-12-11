import React from 'react';
import './AlbumTab.css';
import AlbumTabTrack from './AlbumTabTrack';
import AlbumCover from '../AlbumCover';


const ALBUMS_API='http://localhost:3001/album/';

const defaultHeaders={
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

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

export default AlbumTab;