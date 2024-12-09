
import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';

import { SearchQuestionInterface } from './interfaces/SearchQuestionInterface';

import { SearchQuestion } from './SearchQuestion';
import { ShowQuestion } from './ShowQuestion';



export function ViewQuestion ()
{
	const [ question, setQuestion ] = useState<SearchQuestionInterface | undefined>(undefined);

	return (
		<Stack direction='horizontal' gap={2} className='p-2 h-100'>
			<SearchQuestion setQuestion={setQuestion} />

			{
				question && <>
					<div style={{ height: '90%', border: '1px solid black' }}/>
					<ShowQuestion question={question} />
				</>
			}
		</Stack>
	);
}
