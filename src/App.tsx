import React from 'react';
import './App.css';
import { Header } from './layout/Header/Header';
import { Main } from './layout/Main/Main';
import { Footer } from './layout/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
