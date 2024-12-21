
import { BrowserRouter, Routes, Route } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Home } from './home/Home';
import { QuestionRouters } from './questions/QuestionRouters';


export function Routers ()
{
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path    = 'questions/*'
					element = { <QuestionRouters /> }
				/>

				<Route
					index
					element = { <Home /> }
				/>
			</Routes>
		</BrowserRouter>
	);
}
