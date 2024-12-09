
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ViewQuestion } from './routers/questions/view/ViewQuestion';
import { Welcome } from './routers/welcome/Welcome';


function App ()
{
	return (
		<BrowserRouter>
			<Routes>
				<Route path='questions'>
					<Route path='view' element={ <ViewQuestion /> } />
				</Route>

				<Route index element={ <Welcome /> } />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
