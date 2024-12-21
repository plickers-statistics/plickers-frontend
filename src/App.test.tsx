
import { render, screen } from '@testing-library/react';
import { Routers } from './routers/Routers';


test('renders learn react link', () => {
	render(<Routers />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
