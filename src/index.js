import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './config/globalStyle';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';
import Store from './reducers/store';

ReactDOM.render(
	<Provider store={Store}>
		<GlobalStyle />
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
