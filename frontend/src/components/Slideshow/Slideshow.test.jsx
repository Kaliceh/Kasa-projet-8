import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Slideshow } from './Slideshow'

describe('Slideshow', () => {

    it('the first image is displayed', () => {
        render(<Slideshow pictures={['image1.jpg', 'image2.jpg']} />);

        expect(screen.getByAltText('image 1')).toHaveAttribute('src', 'image1.jpg');
    });

    it('the next button works', () => {
        render(<Slideshow pictures={['image1.jpg', 'image2.jpg']} />);

        expect(screen.getByAltText('image 1')).toHaveAttribute('src', 'image1.jpg');

        fireEvent.click(screen.getByAltText('Suivant'));
        expect(screen.getByAltText('image 2')).toHaveAttribute('src', 'image2.jpg');
    });

    it('the previous button works', () => {
        render(<Slideshow pictures={['image1.jpg', 'image2.jpg']} />);

        fireEvent.click(screen.getByAltText('Suivant'));
        expect(screen.getByAltText('image 2')).toHaveAttribute('src', 'image2.jpg');

        fireEvent.click(screen.getByAltText('Précédent'));
        expect(screen.getByAltText('image 1')).toHaveAttribute('src', 'image1.jpg');
    });

    it('loops to the last image when clicking "previous" on the first image', () => {
        render(<Slideshow pictures={['image1.jpg', 'image2.jpg']} />)

        expect(screen.getByAltText('image 1')).toHaveAttribute('src', 'image1.jpg');

        fireEvent.click(screen.getByAltText('Précédent'));
        expect(screen.getByAltText('image 2')).toHaveAttribute('src', 'image2.jpg');

    });

    it('loops to the first image when clicking "next" on the last image', () => {
        render(<Slideshow pictures={['image1.jpg', 'image2.jpg']} />)

        fireEvent.click(screen.getByAltText('Suivant'));
        expect(screen.getByAltText('image 2')).toHaveAttribute('src', 'image2.jpg');

        fireEvent.click(screen.getByAltText('Suivant'));
        expect(screen.getByAltText('image 1')).toHaveAttribute('src', 'image1.jpg');

    });

    it('it is displayed without an arrow or counter when there is only one image.', () => {
        render(<Slideshow pictures={['image1.jpg']} />)

        expect(screen.getByAltText('image 1')).toHaveAttribute('src', 'image1.jpg');

        expect(screen.queryByAltText('Précédent')).not.toBeInTheDocument();
        expect(screen.queryByAltText('Suivant')).not.toBeInTheDocument();

        expect(screen.queryByText(/1\/1/)).not.toBeInTheDocument();

    });

});