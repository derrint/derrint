/* eslint-disable no-param-reassign */
import { render, screen } from '@testing-library/react';
import { createOvermindMock } from 'overmind';
import { Provider } from 'overmind-react';

import { config } from '@/overmind';

import Modal, { modalBgTestid } from './Modal';

describe('Modal component', () => {
  describe('Rendering default modal', () => {
    const onClose = jest.fn();

    const overmind = createOvermindMock(config, (state) => {
      state.modal = { name: 'test-modal', isVisible: true };
    });

    const modalComponent = (
      <Provider value={overmind}>
        <Modal name="test-modal" onClose={onClose}>
          <p>this is modal content</p>
        </Modal>
      </Provider>
    );

    it('should have bg', () => {
      render(modalComponent);
      const bg = screen.getByTestId(modalBgTestid);
      expect(bg).toBeInTheDocument();
    });

    // it('should have container', () => {
    //   render(modalComponent);
    //   const container = screen.getByTestId(modalContainerTestid);
    //   expect(container).toHaveTextContent('xxx');
    // });

    // it('should have close button', () => {
    //   render(modalComponent);
    //   const closeButton = screen.getByTestId(modalCloseButtonTestid);
    //   expect(closeButton).toBeInTheDocument();
    // });
  });

  // describe('Rendering modal with onClose', () => {
  //   const onClose = jest.fn();

  //   rerender(
  //     <Modal name="test-modal" isVisible onClose={onClose}>
  //       <p>this is modal content</p>
  //     </Modal>
  //   );

  //   it('should call onClose method', async () => {
  //     const closeButton = screen.getByTestId(modalCloseButtonTestid);

  //     fireEvent.click(closeButton);

  //     expect(onClose).toHaveBeenCalledTimes(1);
  //   });
  // });
});
