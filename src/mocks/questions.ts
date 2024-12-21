
import { http, HttpResponse } from 'msw';
import { fakerRU } from '@faker-js/faker';


const questions = Array(Math.floor(Math.random() * 25_000)).fill(null).map(() => ({
	hash : fakerRU.string.uuid(),
	text : fakerRU.lorem.text(),
}));

function question_search ({ request }: any)
{
	const { searchParams } = new URL(request.url);

	const p_search = searchParams.get('search');
	const p_offset = Number.parseInt(searchParams.get('offset') || '0');
	const p_limit  = Number.parseInt(searchParams.get('limit') || '10');

	let response = questions.slice(p_offset, p_offset + p_limit);

	if (p_search) { response = response.filter(options => options.text.includes(p_search)); }

	return HttpResponse.json({
		success : response,
		total   : questions.length,
	});
}

export const questions_routers = [
	http.get('/api/questions', question_search)
];
