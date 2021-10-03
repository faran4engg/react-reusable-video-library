import { FC, ReactNode } from 'react';
import { useHistory } from 'react-router-dom';

interface ModalProps {
  showModal: (flag: boolean) => void;
  children: ReactNode;
  isFeedbackForm?: boolean;
}

const Modal: FC<ModalProps> = ({ showModal, children, isFeedbackForm }) => {
  const history = useHistory();
  return (
    <div className="overflow-y-auto fixed inset-0 z-10">
      <div className="flex justify-center items-end px-4 pt-4 pb-20 min-h-screen text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block overflow-hidden text-left align-bottom rounded-lg shadow-xl transition-all transform bg-light-mode-content-bg dark:bg-dark-mode sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="flex flex-shrink-0 justify-center items-center mx-auto w-12 h-12 bg-purple-200 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                🎉
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                {children}
              </div>
            </div>
          </div>
          <div className="py-3 px-4 sm:px-6 sm:flex sm:flex-row-reverse">
            {isFeedbackForm ? (
              <button
                type="button"
                onClick={() => history.push('/')}
                className="inline-flex justify-center py-2 px-4 w-full text-base font-medium text-white bg-purple-500 rounded-md border border-transparent shadow-sm hover:bg-purple-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              >
                OK
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => showModal(false)}
                  className="inline-flex justify-center py-2 px-4 w-full text-base font-medium text-white bg-purple-500 rounded-md border border-transparent shadow-sm hover:bg-purple-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Add More
                </button>
                <button
                  type="button"
                  onClick={() => history.push('/')}
                  className="inline-flex justify-center py-2 px-4 mt-3 w-full text-base font-medium text-gray-700 bg-gray-300 rounded-md border border-gray-300 shadow-sm focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Go Home
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
