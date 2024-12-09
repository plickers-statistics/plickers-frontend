
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Welcome } from './routers/welcome/Welcome';


function App ()
{
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={ <Welcome /> } />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
