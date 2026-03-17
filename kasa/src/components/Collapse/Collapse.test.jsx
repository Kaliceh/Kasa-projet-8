import { describe, it, expect, } from 'vitest'
import { fireEvent, render, screen, } from '@testing-library/react'
import Collapse from './Collapse'

describe('Collapse', () => {

    it('renders collapse open when clicked', () => {
        render(<Collapse content="test" />);

        // Avant clic, elle n'a pas la classe open
        expect(screen.getByTestId("collapse-chevron").className).not.toContain("open");

        // Clique sur le toggle
        fireEvent.click(screen.getByTestId("collapse-toggle"));

        // Après clic, la classe open est ajoutée
        expect(screen.getByTestId("collapse-chevron").className).toContain("open");

    });

    it('renders collapse close when clicked', () => {
        render(<Collapse content="test" />);

        fireEvent.click(screen.getByTestId("collapse-toggle"));
        expect(screen.getByTestId("collapse-chevron").className).toContain("open");

        fireEvent.click(screen.getByTestId("collapse-toggle"));
        expect(screen.getByTestId("collapse-chevron").className).not.toContain("open");

    });

    it('displays the content', () => {
        render(<Collapse content="test" />);

        fireEvent.click(screen.getByTestId("collapse-toggle"));
        expect(screen.getByText("test")).toBeInTheDocument();

    });

});