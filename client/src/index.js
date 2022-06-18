import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

serviceWorker.unregister();
