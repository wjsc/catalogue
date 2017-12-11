import React from 'react';
import { Link } from 'react-router-dom'


const CDN_URL='http://localhost:3002/';

class AlbumCover extends React.Component {
	render() {
		return (
			<Link to={"/album/"+this.props.album._id}>
				<div className="album" title={this.props.album.title}>
					<img className="cover" alt='Album Cover' src={CDN_URL+this.props.album.cover}/>
				</div>
			</Link>
			);
	}
}

export default AlbumCover;
