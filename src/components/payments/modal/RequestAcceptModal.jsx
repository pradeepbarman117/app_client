import PropTypes from "prop-types";
import toast from "react-hot-toast";
import approvalServices from "../../../services/finance/approval/approvalServices";
import Cookies from 'js-cookie';

const RequestAcceptModal = ({ close, requestId }) => {

  const closeModal = () => {
    close(false);
  };

  const handleStatus = async (statusData) => {
    console.log(statusData)
    try{
        const token = Cookies.get('token');
        const response = await approvalServices.master(statusData,token);
        if (response.status === 200 && response.data.value === "approved") {
            toast.success("Request accepted successfully");
            close(false);
        }
        if(response.status === 200 && response.data.value === "rejected"){
            toast.error("Request rejected successfully");
            close(false);
        }
    }catch(err){
        console.error(err);
        toast.error(err.response.data.message)
    }
  };

  return (
    <>
      <div
        className="relative z-40"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0  bg-gray-500/75 transition-opacity"
          aria-hidden="true"
          onClick={closeModal}
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto pointer-events-none">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg pointer-events-auto">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <svg
                      className="size-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-base font-semibold text-gray-900"
                      id="modal-title"
                    >
                      Approve or Reject
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to approve or reject this request?
                        Once done, you can still modify the payment status
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={() =>
                    handleStatus({
                      status: "approved",
                      comments: "payment recieved",
                      requestId
                    })
                  }
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto"
                >
                  Approve
                </button>
                <button
                  onClick={() =>
                    handleStatus({
                      status: "rejected",
                      comments: "payment not recieved",
                      requestId
                    })
                  }
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-red-500 sm:mt-0 sm:w-auto"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

RequestAcceptModal.propTypes = {
  close: PropTypes.func.isRequired,
  requestId:PropTypes.number.isRequired
};

export default RequestAcceptModal;
