import { describe, it, expect, } from 'vitest'
import { render, screen, } from '@testing-library/react'
import Banner from './Banner'

describe('Banner', () => {

    it('renders correctly with text props', () => {
        render(<Banner image="test.png" text="test" />)


        expect(screen.getByText('test')).toBeInTheDocument()
    });

    it('renders correct image from props', () => {
        render(<Banner image="test.png" text="test" />)

        expect(screen.getByLabelText('banner')).toHaveStyle('background-image: url(test.png)')
    })

    it('does not render text when text props is not provided', () => {
        render(<Banner image="test.png" />)

        expect(screen.queryByRole("heading")).not.toBeInTheDocument()
    });

});