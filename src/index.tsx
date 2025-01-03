
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routers } from './routers/Routers';
import reportWebVitals from './reportWebVitals';


if (process.env.NODE_ENV === 'development')
{
	import('./mocks/server');
}

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Routers />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
