import React from 'react';
import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './common.css';
import registerServiceWorker from './registerServiceWorker';
import CatalogueApp from './components/CatalogueApp';
import bugsnag from 'bugsnag-js'
import createPlugin from 'bugsnag-react'

const bugsnagClient = bugsnag('9982863f503b8ea8ad471f1473120748')
const ErrorBoundary = bugsnagClient.use(createPlugin(React))

ReactDOM.render(
	<HashRouter>
		<ErrorBoundary>
			<CatalogueApp/>
		</ErrorBoundary>
	</HashRouter>
  ,
  document.getElementById('root')
);

registerServiceWorker();
