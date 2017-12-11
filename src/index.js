import React from 'react';
import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import CatalogueApp from './components/CatalogueApp';

ReactDOM.render(
	<HashRouter>
		 <CatalogueApp/>
	</HashRouter>
  ,
  document.getElementById('root')
);