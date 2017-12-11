import React from 'react';
import { Link } from 'react-router-dom'

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

export default ArtistCover;