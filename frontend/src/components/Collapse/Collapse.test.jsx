
import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Collapse from './Collapse'

describe('Collapse', () => {

    it('renders collapse open when clicked', () => {
        render(<Collapse title="Titre" content="test" />)

        expect(screen.getByRole('img', { name: /chevron/i }).className)
            .not.toContain('open')

        fireEvent.click(screen.getByText('Titre'))

        expect(screen.getByRole('img', { name: /chevron/i }).className)
            .toContain('open')
    });

    it('renders collapse close when clicked', () => {
        render(<Collapse title="Titre" content="test" />)

        fireEvent.click(screen.getByText('Titre'))
        expect(screen.getByRole('img', { name: /chevron/i }).className)
            .toContain('open')

        fireEvent.click(screen.getByText('Titre'))
        expect(screen.getByRole('img', { name: /chevron/i }).className)
            .not.toContain('open')
    });

    it('displays the content', () => {
        render(<Collapse title="Titre" content="test" />)

        fireEvent.click(screen.getByText('Titre'))

        expect(screen.getByText('test')).toBeInTheDocument()
    });

});