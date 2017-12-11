import React from 'react';
import { Switch, Route } from 'react-router-dom'
import RandomTab from './RandomTab/RandomTab';
import SearchTab from './SearchTab/SearchTab';
import FavoritesTab from './FavoritesTab/FavoritesTab';
import HistoryTab from './HistoryTab/HistoryTab';
import ArtistTab from './ArtistTab/ArtistTab';
import AlbumTab from './AlbumTab/AlbumTab';

class TabPanel extends React.Component {
	
	render() {
		return (
			<div className="tabPanel">
				<Switch>
				      <Route exact path='/' component={RandomTab}/>
				      <Route path='/search' component={SearchTab}/>
				      <Route path='/favorites' component={FavoritesTab}/>
				      <Route path='/history' component={HistoryTab}/>
				      <Route path='/artist/:_id' component={ArtistTab}/>
				      <Route path='/album/:_id' component={AlbumTab}/>
			    </Switch>
			</div>
		);
	}
}

export default TabPanel;