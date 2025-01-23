<<<<<<< HEAD
import PropTypes from 'prop-types'
import { memo } from 'react';

const Modal = ({ isOpen, onClose, children, title }) => {
    return (
        <>
            <div
                tabIndex={-1}
                aria-hidden={isOpen ? "false" : "true"} // Hide when isOpen is false
                className={`${isOpen ? "flex" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full bg-[#333333b0]`}
            >
                {/* Background overlay */}
                {/* <div
                    className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"
                    onClick={onClose} // Close the modal when clicking outside
                ></div> */}

                <div
                    className={`relative p-4 w-full max-w-2xl bg-white rounded-lg shadow transform`}
                >
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-300">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {title}
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                onClick={onClose} // Close the modal
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        {/* Modal body */}
                        {/* <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed text-gray-700">
                                With less than a month to go before the European Union enacts new
                                consumer privacy laws for its citizens, companies around the world
                                are updating their terms of service agreements to comply.
                            </p>
                            <p className="text-base leading-relaxed text-gray-700">
                                The European Union&apos;s General Data Protection Regulation (G.D.P.R.)
                                goes into effect on May 25 and is meant to ensure a common set of
                                data rights in the European Union. It requires organizations to
                                notify users as soon as possible of high-risk data breaches that
                                could personally affect them.
                            </p>
                        </div> */}

                        {children}




                        {/* Modal footer */}
                        {/* <div className="flex items-center p-4 md:p-5 rounded-b">
                            <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                onClick={onClose}
                            >
                                I accept
                            </button>
                            <button
                                type="button"
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                                onClick={onClose}
                            >
                                Decline
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default memo(Modal);
=======
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, children, title }) => {
  return (
    <>
      <div
        tabIndex={-1}
        aria-hidden={isOpen ? "false" : "true"} // Hide when isOpen is false
        className={`${
          isOpen ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full bg-[#333333b0]`}
      >
        <div
          className={`relative p-4 w-full max-w-2xl bg-white rounded-lg shadow transform`}
        >
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-300">
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                onClick={onClose} // Close the modal
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
>>>>>>> fe76fd557da426803569ab39d8a9e9e2d64d0c80
