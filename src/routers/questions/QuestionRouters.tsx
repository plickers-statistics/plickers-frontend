
import { Routes, Route } from 'react-router';

import { QuestionSearch } from './search/QuestionSearch';


export function QuestionRouters ()
{
	return (
		<Routes>
			<Route
				index
				element = { <QuestionSearch /> }
			/>
		</Routes>
	);
}
