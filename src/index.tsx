import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.css';
import { Home } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>
);
