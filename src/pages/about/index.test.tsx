/* eslint-disable global-require */
import { render, screen } from '@testing-library/react';

import About, { pageSubtitleTestid, pageTitleTestid } from '@/pages/about';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

beforeEach(async () => {});

describe('About page', () => {
  describe('Render method', () => {
    it('should have title & subtitle', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/about' });
      render(<About />);

      const title = screen.getByTestId(pageTitleTestid);
      const subtitle = screen.getByTestId(pageSubtitleTestid);

      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('About');
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveTextContent('Here is My Bio');
    });

    it('should have blank title & subtitle', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '' });
      render(<About />);

      const title = screen.getByTestId(pageTitleTestid);
      const subtitle = screen.getByTestId(pageSubtitleTestid);

      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('');
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveTextContent('');
    });
  });
});
