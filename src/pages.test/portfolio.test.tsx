/* eslint-disable jest/no-commented-out-tests */
/* eslint-disable testing-library/no-wait-for-side-effects */
/* eslint-disable no-param-reassign */
/* eslint-disable global-require */
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'overmind-react';

import {
  modalCloseButtonTestid,
  modalContainerTestid,
} from '@/components/Modal/Modal';
import { store } from '@/overmind';
import Portfolio, {
  modalTitleTestid,
  pageSubtitleTestid,
  pageTitleTestid,
  portfolioButtonsTestid,
  portfoliosTestid,
} from '@/pages/portfolio';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe('Portfolio page', () => {
  describe('Render method', () => {
    it('should have title & subtitle', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/portfolio' });
      render(
        <Provider value={store}>
          <Portfolio />
        </Provider>
      );

      const title = screen.getByTestId(pageTitleTestid);
      const subtitle = screen.getByTestId(pageSubtitleTestid);

      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Portfolio');
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveTextContent('Some of My Work');
    });

    it('should have blank title & subtitle', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '' });
      render(
        <Provider value={store}>
          <Portfolio />
        </Provider>
      );

      const title = screen.getByTestId(pageTitleTestid);
      const subtitle = screen.getByTestId(pageSubtitleTestid);

      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('');
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveTextContent('');
    });

    it('should display all of the portfolios correctly', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/portfolio' });
      render(
        <Provider value={store}>
          <Portfolio />
        </Provider>
      );

      const portfolios = screen.getAllByTestId(portfoliosTestid);

      expect(portfolios).toHaveLength(8);
      expect(portfolios[0]).toHaveTextContent('Event Supporting');
      expect(portfolios[3]).toHaveTextContent('Vessel blockchain');
    });
  });

  describe('Page interactions', () => {
    it("should show modal when the portfolio's image is clicked", async () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/portfolio' });
      render(
        <Provider value={store}>
          <Portfolio />
        </Provider>
      );

      const portfolioButtons = screen.getAllByTestId(portfolioButtonsTestid);
      const readMoreButton = portfolioButtons[15] as HTMLElement;

      fireEvent.click(readMoreButton);

      const modal = screen.queryByTestId(modalContainerTestid);
      const modalTitle = screen.queryByTestId(modalTitleTestid);
      expect(modal).toBeInTheDocument();
      expect(modalTitle).toHaveTextContent('Diamond Hands');
    });

    it("should show modal when the portfolio's title is clicked", async () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/portfolio' });
      render(
        <Provider value={store}>
          <Portfolio />
        </Provider>
      );

      const portfolioButtons = screen.getAllByTestId(portfolioButtonsTestid);
      const titleButton = portfolioButtons[1] as HTMLElement;

      fireEvent.click(titleButton);

      const modal = screen.queryByTestId(modalContainerTestid);
      const modalTitle = screen.queryByTestId(modalTitleTestid);
      expect(modal).toBeInTheDocument();
      expect(modalTitle).toHaveTextContent('GIIAS Auto360');
    });

    it("should show modal when the portfolio's read more is clicked", async () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/portfolio' });
      render(
        <Provider value={store}>
          <Portfolio />
        </Provider>
      );

      const portfolioButtons = screen.getAllByTestId(portfolioButtonsTestid);
      const readMoreButton = portfolioButtons[8] as HTMLElement;

      fireEvent.click(readMoreButton);

      const modal = screen.queryByTestId(modalContainerTestid);
      const modalTitle = screen.queryByTestId(modalTitleTestid);
      expect(modal).toBeInTheDocument();
      expect(modalTitle).toHaveTextContent('Yooniez');
    });

    it('should hide modal when close button is being clicked', async () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/portfolio' });
      render(
        <Provider value={store}>
          <Portfolio />
        </Provider>
      );

      const portfolioButtons = screen.getAllByTestId(portfolioButtonsTestid);
      const titleButton = portfolioButtons[1] as HTMLElement;
      fireEvent.click(titleButton);

      const modal1 = screen.queryByTestId(modalContainerTestid);
      const modalTitle1 = screen.queryByTestId(modalTitleTestid);
      expect(modal1).toBeInTheDocument();
      expect(modal1).toHaveClass('opacity-0');
      expect(modalTitle1).toHaveTextContent('GIIAS Auto360');

      const closeButton = screen.getByTestId(modalCloseButtonTestid);
      fireEvent.click(closeButton);

      const modalTitle2 = screen.queryByTestId(modalTitleTestid);
      expect(modalTitle2).not.toBeInTheDocument();
      expect(modal1).toHaveClass('opacity-100');
    });
  });
});
