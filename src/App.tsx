import './App.css';
import { Main } from './layout/Main/Main';
import { Header } from './layout/Header/Header';
import { Footer } from './layout/Footer/Footer';
import { useAppSelector } from './redux/store/store';
import { getDaysOfWeek } from './utils/helpers/getDaysOfWeek';

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
