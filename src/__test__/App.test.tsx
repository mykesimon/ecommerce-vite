import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App', () => {
	it('should have a heading', () => {
		render(<App />);

		const heading = screen.getByRole('heading', { name: /vite \+ react/i });
		expect(heading).toBeInTheDocument();
	});

	it('should increase count from 0 to 1 when count btn is clicked one time', async () => {
		render(<App />);

		const countButton = screen.getByRole('button', { name: /count is 0/i });

		await userEvent.click(countButton);

		expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();
	});

	it('should increase count from 0 to 3 when count btn is clicked 3 times', async () => {
		render(<App />);

		const countButton = screen.getByRole('button', { name: /count is 0/i });

		await userEvent.click(countButton);
		await userEvent.click(countButton);
		await userEvent.click(countButton);

		expect(screen.getByRole('button', { name: /count is 3/i })).toBeInTheDocument();
	});
});
