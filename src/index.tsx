import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './routes'; // Adjust the import path as necessary
import './assets/style.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<Routes />
	</BrowserRouter>,
	document.getElementById('root')
);
