/* eslint-disable no-param-reassign */
import { fireEvent, render, screen } from '@testing-library/react';
import { createOvermindMock } from 'overmind';
import { Provider } from 'overmind-react';

import { config } from '@/overmind';

import Modal, {
  modalBgTestid,
  modalCloseButtonTestid,
  modalContainerTestid,
} from './Modal';

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

describe('Modal component', () => {
  const onClose = jest.fn();

  const overmind = createOvermindMock(config, (state) => {
    state.modal = { name: 'test-modal', isVisible: true };
  });

  const modalComponent = (
    <Provider value={overmind}>
      <Modal name="test-modal" onClose={() => {}}>
        <p>this is modal content</p>
      </Modal>
    </Provider>
  );

  describe('Rendering default modal', () => {
    it('should have bg', () => {
      render(modalComponent);
      const bg = screen.getByTestId(modalBgTestid);
      expect(bg).toBeInTheDocument();
    });

    it('should have container', () => {
      render(modalComponent);
      const container = screen.getByTestId(modalContainerTestid);
      expect(container).toBeInTheDocument();
    });

    it('should have close button, but not calling onClose method', () => {
      render(modalComponent);
      const closeButton = screen.getByTestId(modalCloseButtonTestid);
      expect(closeButton).toBeInTheDocument();

      fireEvent.click(closeButton);

      expect(onClose).not.toHaveBeenCalled();
    });
  });

  const overmind2 = createOvermindMock(config, (state) => {
    state.modal = { name: 'test-modal-2', isVisible: true };
  });

  const modalComponentWithCloseMethod = (
    <Provider value={overmind2}>
      <Modal name="test-modal-2" onClose={onClose}>
        <p>this is modal content</p>
      </Modal>
    </Provider>
  );

  describe('Rendering modal with onClose', () => {
    it('should call onClose method', () => {
      render(modalComponentWithCloseMethod);
      const closeButton = screen.getByTestId(modalCloseButtonTestid);

      fireEvent.click(closeButton);

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
});
