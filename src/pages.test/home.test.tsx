/* eslint-disable global-require */
import { render, screen } from '@testing-library/react';

import Home, {
  pageSubtitleTestid,
  pageTitleTestid,
  socialMediasTestid,
} from '@/pages/home';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

beforeEach(async () => {});

describe('Home page', () => {
  describe('Render method', () => {
    it('should have title & subtitle', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/' });
      render(<Home />);

      const title = screen.getByTestId(pageTitleTestid);
      const subtitle = screen.getByTestId(pageSubtitleTestid);

      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Lorensio Derrint');
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveTextContent('master Front-End & Mobile');
    });

    it('should render social medias correctly', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/' });
      render(<Home />);

      const socmeds = screen.getAllByTestId(socialMediasTestid);

      expect(socmeds).toHaveLength(5);
    });
  });
});
