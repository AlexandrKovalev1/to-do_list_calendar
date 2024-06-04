import React, { useEffect } from 'react';
import './App.css';
import { Header } from './layout/Header/Header';
import { Main } from './layout/Main/Main';
import { Footer } from './layout/Footer/Footer';
import { useAppSelector } from './redux/store/store';
import { getDaysOfWeek } from './utils/helpers/getDaysOfWeek';

function App() {
	const selectedDay = useAppSelector(state => state.app.selectedDay);

	selectedDay && console.log(getDaysOfWeek(new Date()));
	return (
		<div className='App'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
