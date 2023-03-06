/* eslint-disable global-require */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Gallery, {
  categoriesTestid,
  galleryTestid,
  pageSubtitleTestid,
  pageTitleTestid,
} from '@/pages/gallery';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

beforeEach(async () => {});

describe('Gallery page', () => {
  describe('Render method', () => {
    it('should have title & subtitle', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/gallery' });
      render(<Gallery />);

      const title = screen.getByTestId(pageTitleTestid);
      const subtitle = screen.getByTestId(pageSubtitleTestid);

      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Gallery');
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveTextContent('My best shots, so far');
    });

    it('should have blank title & subtitle', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '' });
      render(<Gallery />);

      const title = screen.getByTestId(pageTitleTestid);
      const subtitle = screen.getByTestId(pageSubtitleTestid);

      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('');
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveTextContent('');
    });

    it('should display all of the categories & gallery correctly', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/gallery' });
      render(<Gallery />);

      const categories = screen.getAllByTestId(categoriesTestid);
      const gallery = screen.getAllByTestId(galleryTestid);

      expect(categories).toHaveLength(6);
      expect(categories[0]).toHaveTextContent('all');
      expect(categories[0]).toHaveClass('text-black');
      expect(categories[1]).toHaveTextContent('activity');
      expect(categories[1]).toHaveClass('text-[#767676]');

      expect(gallery).toHaveLength(48);
    });

    it('should display active category alongside with the gallery correctly', async () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/gallery' });
      render(<Gallery />);

      const categories = screen.getAllByTestId(categoriesTestid);
      const foodCategoryTab = categories[2] as HTMLElement;

      expect(categories[0]).toHaveClass('text-black');
      expect(categories[1]).toHaveClass('text-[#767676]');
      expect(categories[2]).toHaveClass('text-[#767676]');

      fireEvent.click(foodCategoryTab);

      expect(categories[0]).toHaveClass('text-[#767676]');
      expect(categories[1]).toHaveClass('text-[#767676]');
      expect(categories[2]).toHaveClass('text-black');

      await waitFor(() => {
        const gallery = screen.getAllByTestId(galleryTestid);
        expect(gallery).toHaveLength(9);
      });
    });
  });
});
