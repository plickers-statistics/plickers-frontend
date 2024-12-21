
import { BrowserRouter, Routes, Route } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Home } from './home/Home';


export function Routers ()
{
	return (
		<BrowserRouter>
			<Routes>
				<Route index element = { <Home /> } />
			</Routes>
		</BrowserRouter>
	);
}
