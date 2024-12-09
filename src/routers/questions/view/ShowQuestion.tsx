
import React from 'react';
import { Spinner } from 'react-bootstrap';

import { SearchQuestionInterface } from './interfaces/SearchQuestionInterface';


type TypeOptions = {
	question: SearchQuestionInterface
};

export function ShowQuestion ({ question }: TypeOptions)
{
	return (
		<div className='col-8 text-center'>
			<Spinner animation='border' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</Spinner>
		</div>
	);
}
