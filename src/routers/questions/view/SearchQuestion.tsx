
import React, { useRef } from 'react';
import { Button, Container, FloatingLabel, Form, Stack } from 'react-bootstrap';

import { SearchQuestionInterface } from './interfaces/SearchQuestionInterface';


type TypeOptions = {
	setQuestion: React.Dispatch<React.SetStateAction<SearchQuestionInterface | undefined>>;
};

export function SearchQuestion ({ setQuestion }: TypeOptions)
{
	const tag_class_name   = useRef<HTMLInputElement | null>(null);
	const tag_teacher_name = useRef<HTMLInputElement | null>(null);

	const tag_date          = useRef<HTMLInputElement | null>(null);
	const tag_question_text = useRef<HTMLInputElement | null>(null);

	const on_click = function (): void
	{
		setQuestion({
			class_name   : tag_class_name.current?.value,
			teacher_name : tag_teacher_name.current?.value,

			date          : tag_date.current?.value,
			question_text : tag_question_text.current?.value,
		});
	};

	return (
		<Container fluid='sm'>
			<Stack direction='vertical' gap={2}>
				<h3 className='text-center'>Заполните одно или несколько полей</h3>

				<FloatingLabel controlId='class_name' label='название класса'>
					<Form.Control ref={tag_class_name} placeholder='пример класса' />
				</FloatingLabel>

				<FloatingLabel controlId='teacher_name' label='название преподавателя'>
					<Form.Control ref={tag_teacher_name} placeholder='пример преподавателя' />
				</FloatingLabel>

				<hr />

				<FloatingLabel controlId='date' label='дата'>
					<Form.Control ref={tag_date} type='date' />
				</FloatingLabel>

				<FloatingLabel controlId='question_text' label='текст вопроса'>
					<Form.Control ref={tag_question_text} placeholder='пример вопроса' />
				</FloatingLabel>

				<hr />

				<Button onClick={on_click} variant='primary'>отправить</Button>
			</Stack>
		</Container>
	);
}
