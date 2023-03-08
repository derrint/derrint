/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable global-require */
import { act, fireEvent, render, screen } from '@testing-library/react';
import fetch, { enableFetchMocks } from 'jest-fetch-mock';
import { Provider } from 'overmind-react';

import { contactFormMockValue } from '@/mocks/fetch-submit-contact';
import { store } from '@/overmind';
import Contact, {
  contactFormURL,
  formEmailTestid,
  formMessageTestid,
  formNameTestid,
  formSubmitButtonTestid,
  formSubmitResultTestid,
  formTestid,
  formValidationMessage,
  pageSubtitleTestid,
  pageTitleTestid,
} from '@/pages/contact';

enableFetchMocks();

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

beforeEach(() => {
  fetch.resetMocks();
});

describe('Contact page', () => {
  describe('Render method', () => {
    it('should have title & subtitle', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/contact' });
      render(
        <Provider value={store}>
          <Contact />
        </Provider>
      );

      const title = screen.getByTestId(pageTitleTestid);
      const subtitle = screen.getByTestId(pageSubtitleTestid);

      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Contact');
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveTextContent('Get in touch');
    });

    it('should have blank title & subtitle', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '' });
      render(
        <Provider value={store}>
          <Contact />
        </Provider>
      );

      const title = screen.getByTestId(pageTitleTestid);
      const subtitle = screen.getByTestId(pageSubtitleTestid);

      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('');
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveTextContent('');
    });

    it('should render form', () => {
      const useRouter = jest.spyOn(require('next/router'), 'useRouter');
      useRouter.mockReturnValue({ pathname: '/contact' });
      render(
        <Provider value={store}>
          <Contact />
        </Provider>
      );

      const form = screen.getByTestId(formTestid);

      expect(form).toBeInTheDocument();
    });
  });

  describe('Submit actions', () => {
    it('Should submit form successfully', async () => {
      render(
        <Provider value={store}>
          <Contact />
        </Provider>
      );

      const validationMessage = screen.getByTestId(formValidationMessage);
      const name = screen.getByTestId(formNameTestid);
      const email = screen.getByTestId(formEmailTestid);
      const message = screen.getByTestId(formMessageTestid);
      const submitButton = screen.getByTestId(formSubmitButtonTestid);
      const submitResult = screen.getByTestId(formSubmitResultTestid);

      fireEvent.change(name, {
        target: {
          value: contactFormMockValue.name,
        },
      });
      expect(name).toHaveValue(contactFormMockValue.name);

      fireEvent.change(email, {
        target: {
          value: contactFormMockValue.email,
        },
      });
      expect(email).toHaveValue(contactFormMockValue.email);

      fireEvent.change(message, {
        target: {
          value: contactFormMockValue.message,
        },
      });
      expect(message).toHaveValue(contactFormMockValue.message);

      await act(async () => {
        fireEvent.click(submitButton);
      });

      expect(validationMessage).toHaveClass('opacity-0');

      expect(fetch).toHaveBeenCalledWith(contactFormURL, {
        method: 'POST',
        body: JSON.stringify(contactFormMockValue),
        headers: {
          Accept: 'application/json',
        },
      });

      expect(submitResult).toHaveTextContent('Thanks for your submission!');
    });

    it('Should not submit falsy form', async () => {
      render(
        <Provider value={store}>
          <Contact />
        </Provider>
      );

      const validationMessage = screen.getByTestId(formValidationMessage);
      const name = screen.getByTestId(formNameTestid);
      const email = screen.getByTestId(formEmailTestid);
      const message = screen.getByTestId(formMessageTestid);
      const submitButton = screen.getByTestId(formSubmitButtonTestid);

      await act(async () => {
        fireEvent.click(submitButton);
      });

      expect(validationMessage).toHaveClass('opacity-100');
      expect(name).toHaveClass('!border-red-300');
      expect(email).toHaveClass('!border-red-300');
      expect(message).toHaveClass('!border-red-300');
    });

    it('Should handle error response correctly', async () => {
      render(
        <Provider value={store}>
          <Contact />
        </Provider>
      );

      const name = screen.getByTestId(formNameTestid);
      const email = screen.getByTestId(formEmailTestid);
      const message = screen.getByTestId(formMessageTestid);
      const submitButton = screen.getByTestId(formSubmitButtonTestid);
      const submitResult = screen.getByTestId(formSubmitResultTestid);

      fireEvent.change(name, {
        target: {
          value: contactFormMockValue.name,
        },
      });
      expect(name).toHaveValue(contactFormMockValue.name);

      fireEvent.change(email, {
        target: {
          value: contactFormMockValue.email,
        },
      });
      expect(email).toHaveValue(contactFormMockValue.email);

      fireEvent.change(message, {
        target: {
          value: contactFormMockValue.message,
        },
      });
      expect(message).toHaveValue(contactFormMockValue.message);

      await act(async () => {
        fetch.mockResponseOnce(
          `
          {
            "error": "Form not found",
            "errors": [
                {
                    "code": "FORM_NOT_FOUND",
                    "message": "Form not found"
                }
            ]
          }`,
          {
            status: 500,
            headers: { 'content-type': 'application/json' },
          }
        );
        fireEvent.click(submitButton);
      });

      expect(submitResult).toHaveTextContent('Form not found');
    });

    it('Should handle blank error response correctly', async () => {
      render(
        <Provider value={store}>
          <Contact />
        </Provider>
      );

      const name = screen.getByTestId(formNameTestid);
      const email = screen.getByTestId(formEmailTestid);
      const message = screen.getByTestId(formMessageTestid);
      const submitButton = screen.getByTestId(formSubmitButtonTestid);
      const submitResult = screen.getByTestId(formSubmitResultTestid);

      fireEvent.change(name, {
        target: {
          value: contactFormMockValue.name,
        },
      });
      expect(name).toHaveValue(contactFormMockValue.name);

      fireEvent.change(email, {
        target: {
          value: contactFormMockValue.email,
        },
      });
      expect(email).toHaveValue(contactFormMockValue.email);

      fireEvent.change(message, {
        target: {
          value: contactFormMockValue.message,
        },
      });
      expect(message).toHaveValue(contactFormMockValue.message);

      await act(async () => {
        fetch.mockResponseOnce(
          `
          {
            "error": "Form not found",
          }`,
          {
            status: 500,
            headers: { 'content-type': 'application/json' },
          }
        );
        fireEvent.click(submitButton);
      });

      expect(submitResult).toHaveTextContent(
        'Oops! There was a problem submitting your form'
      );
    });

    it('Should handle rejected response correctly', async () => {
      render(
        <Provider value={store}>
          <Contact />
        </Provider>
      );

      const name = screen.getByTestId(formNameTestid);
      const email = screen.getByTestId(formEmailTestid);
      const message = screen.getByTestId(formMessageTestid);
      const submitButton = screen.getByTestId(formSubmitButtonTestid);
      const submitResult = screen.getByTestId(formSubmitResultTestid);

      fireEvent.change(name, {
        target: {
          value: contactFormMockValue.name,
        },
      });
      expect(name).toHaveValue(contactFormMockValue.name);

      fireEvent.change(email, {
        target: {
          value: contactFormMockValue.email,
        },
      });
      expect(email).toHaveValue(contactFormMockValue.email);

      fireEvent.change(message, {
        target: {
          value: contactFormMockValue.message,
        },
      });
      expect(message).toHaveValue(contactFormMockValue.message);

      await act(async () => {
        fetch.mockRejectOnce(new Error());
        fireEvent.click(submitButton);
      });

      expect(submitResult).toHaveTextContent('Oops! Something wrong happened');
    });
  });
});
