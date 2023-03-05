/* eslint-disable global-require */
import { render, screen } from '@testing-library/react';

import About, {
  pageSectionTestid,
  pageSubtitleTestid,
  pageTitleTestid,
} from '@/pages/about';

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

    it('should render desired sections', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/about' });
      render(<About />);

      const sections = screen.getAllByTestId(pageSectionTestid);

      expect(sections).toHaveLength(5);

      expect(sections[0]).toHaveTextContent('Lorensio Derrint');
      expect(sections[0]).toHaveTextContent(
        'Driving, Travelling, Wandering Around'
      );

      expect(sections[1]).toHaveTextContent('Language Skills');
      expect(sections[1]).toHaveTextContent(
        'React, React Native, NextJS, Sass'
      );

      expect(sections[2]).toHaveTextContent('Knowledge');
      expect(sections[2]).toHaveTextContent('Passionate & Responsible');

      expect(sections[3]).toHaveTextContent('Experience');
      expect(sections[3]).toHaveTextContent('PT Quipper Edukasi Indonesia');

      expect(sections[4]).toHaveTextContent('magical hand');
      expect(sections[4]).toHaveTextContent('Servina Lutfi');
    });
  });
});
