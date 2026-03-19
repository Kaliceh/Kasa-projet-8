import { describe, it, expect, } from 'vitest'
import { render, screen, } from '@testing-library/react'
import { Card } from './Card'
import { MemoryRouter } from 'react-router-dom'

describe('Card', () => {

    it('the title is well displayed', () => {
        render(
            <MemoryRouter>
                <Card title="test" />
            </MemoryRouter>
        )

        expect(screen.getByText('test')).toBeInTheDocument()
    });

    it('applies the cover image as background', () => {
        render(
            <MemoryRouter>
                <Card title="test" cover="image.png" />
            </MemoryRouter>
        )

        expect(screen.getByLabelText('test')).toHaveStyle(`background-image: url(image.png)`)
    });

    it('sets the link href correctly', () => {
        render(
            <MemoryRouter>
                <Card id="123" />
            </MemoryRouter>
        )

        expect(screen.getByRole('link')).toHaveAttribute('href', '/logement/123')
    });

});