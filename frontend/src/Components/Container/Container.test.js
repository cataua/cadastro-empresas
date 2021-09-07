import { render, screen } from '@testing-library/react';
import Container from "./Container";

test('Renders container component', ()  => {
    render(<Container />);
    expect(true).toBeTruthy();
})