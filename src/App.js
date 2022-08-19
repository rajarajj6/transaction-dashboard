import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trasanctions from './components/Trasanctions';
import Header from './components/Header';

function App() {
	return (
		<BrowserRouter>
		<Header />
			<Routes>
				<Route path="/" element={<Trasanctions />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
