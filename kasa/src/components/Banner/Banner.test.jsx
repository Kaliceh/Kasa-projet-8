import { describe, it, expect, } from 'vitest'
import { render, screen, } from '@testing-library/react'
import Banner from './Banner'

describe('Banner', () => {
    it('renders correctly with text props', () => {
        render(<Banner image="test.png" text="test" />)


        expect(screen.getByText('test')).toBeInTheDocument()
    })

})