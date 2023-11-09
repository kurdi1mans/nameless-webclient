import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reduxStore from './ModelAndController/ReduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={reduxStore}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);

