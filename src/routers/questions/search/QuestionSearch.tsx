
import { Grid } from 'gridjs-react';
import 'gridjs/dist/theme/mermaid.css';


export interface QuestionSearchServer
{
	success: {
		hash: string;
		text: string;
	}[];

	total: number;
}

export function QuestionSearch ()
{
	return (
		<div className = 'p-2'>
			<Grid
				columns = {[ 'hash', 'text' ]}

				search = {{
					server: {
						url : (prev: string, keyword: string) => `${prev}&search=${keyword}`
					}
				}}

				server = {{
					url   : '/api/questions?',
					then  : (data: QuestionSearchServer) => data.success.map(options => [ options.hash, options.text ]),
					total : (data: QuestionSearchServer) => data.total,
				}}

				pagination = {{
					server: {
						url: (prev: string, page: number, limit: number) => `${prev}&offset=${ page * limit }&limit=${ limit }`
					},

					limit: 10
				}}
			/>
		</div>
	);
}
