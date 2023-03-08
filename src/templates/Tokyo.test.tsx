/* eslint-disable global-require */
import { render, screen } from '@testing-library/react';

import {
  desktopMenusTestid,
  mobileMenusTestid,
  pageContentTestid,
  pageTemplateTestid,
  Tokyo,
} from './Tokyo';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Tokyo template', () => {
  describe('Render method', () => {
    it('should have 5 mobile & 5 desktop menu items', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/' });
      render(<Tokyo meta={null}>{null}</Tokyo>);

      const mobileMenus = screen.getAllByTestId(mobileMenusTestid);
      expect(mobileMenus).toHaveLength(5);

      const desktopMenus = screen.getAllByTestId(desktopMenusTestid);
      expect(desktopMenus).toHaveLength(5);
    });

    it('should render mobile menu correctly based on active page', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/' });
      render(<Tokyo meta={null}>{null}</Tokyo>);

      const menus = screen.getAllByTestId(mobileMenusTestid);

      expect(menus[0]).toHaveClass('active');
      expect(menus[1]).not.toHaveClass('active');
      expect(menus[2]).not.toHaveClass('active');
    });

    it('should render desktop menu correctly based on active page', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/about' });
      render(<Tokyo meta={null}>{null}</Tokyo>);

      const menus = screen.getAllByTestId(desktopMenusTestid);

      expect(menus[0]).not.toHaveClass('active');
      expect(menus[1]).toHaveClass('active');
      expect(menus[2]).not.toHaveClass('active');
    });

    it('should have copyright section', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/' });
      render(<Tokyo meta={null}>{null}</Tokyo>);

      const copyrightSection = screen.getByText(/© 2023/);

      expect(copyrightSection).toBeInTheDocument();
    });

    it('should render meta & page content correctly', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/' });
      render(
        <Tokyo meta={<div>This is meta</div>}>
          <div>This is content</div>
        </Tokyo>
      );

      const template = screen.getByTestId(pageTemplateTestid);
      expect(template).toHaveTextContent('This is meta');

      const content = screen.getByTestId(pageContentTestid);
      expect(content).toHaveTextContent('This is content');
    });
  });
});
