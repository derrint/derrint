import { Dialog, Transition } from '@headlessui/react';
import type { ReactNode } from 'react';
import { Fragment } from 'react';
import { IoClose } from 'react-icons/io5';

import { useActions, useState } from '@/overmind/index';

type IModalProps = {
  children: ReactNode;
  name: string;
  onClose: () => void;
};

export const modalBgTestid = 'modal-bg';
export const modalContainerTestid = 'modal-container';
export const modalCloseButtonTestid = 'modal-close-button';

const Modal = (props: IModalProps) => {
  const { modal } = useState();
  const { hideModal } = useActions();

  const onModalClose = () => {
    hideModal();
    props.onClose();
  };

  return (
    <Transition
      appear
      show={modal.isVisible && modal.name === props.name}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="fixed inset-0 z-20 overflow-y-auto"
        onClose={onModalClose}
        data-testid={modalBgTestid}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/70" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className="inline-block text-center align-middle transition-all"
              data-testid={modalContainerTestid}
            >
              <button
                className="absolute -top-10 right-0 z-20 outline-none"
                onClick={onModalClose}
                data-testid={modalCloseButtonTestid}
              >
                <IoClose size={32} color={'#ffffff'} />
              </button>
              {props.children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
