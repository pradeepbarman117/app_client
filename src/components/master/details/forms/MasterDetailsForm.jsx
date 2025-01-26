import { allowOnly } from "../../../../utils/validation/allowOnly";
import PropTypes from 'prop-types';


const MasterDetailsForm = ({ formik, isChanged }) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex max-w-full flex-wrap gap-4 px-4 py-3">
          <label className="flex flex-col min-w-0 flex-1">
            <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
              Name
            </p>
            <input
              className="form-input w-full resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal capitalize"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onKeyDown={allowOnly}
              name="name"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </label>
          <label className="flex flex-col min-w-0 flex-1">
            <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
              Email
            </p>
            <input
              className="form-input w-full resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </label>
        </div>

        <div className="flex max-w-full flex-wrap gap-4 px-4 py-3">
          <label className="flex flex-col min-w-0 flex-1">
            <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
              Share (%)
            </p>
            <input
              className="form-input w-full resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
              value={formik.values.percent}
              onChange={formik.handleChange}
              onKeyDown={allowOnly.number}
              onBlur={formik.handleBlur}
              maxLength={3}
              name="percent"
            />
            {formik.touched.percent && formik.errors.percent && (
              <div className="text-red-500 text-sm">
                {formik.errors.percent}
              </div>
            )}
          </label>
        </div>

        <div className="flex w-fit flex-wrap gap-4 px-4 py-3">
          <label className="flex flex-col min-w-0">
            <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
              Blacklist
            </p>
            <input
              type="checkbox"
              className="sr-only peer"
              checked={formik.values.blacklist}
              onChange={formik.handleChange}
              name="blacklist"
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
          </label>
        </div>

        <div className="flex px-4 py-3 justify-end">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em] disabled:opacity-70 disabled:pointer-events-none disabled:select-none"
            type="submit"
            disabled={formik.isSubmitting || !isChanged}
          >
            {formik.isSubmitting ? "Saving changes..." : "Save"}
          </button>
        </div>
      </form>
    </>
  );
};


MasterDetailsForm.propTypes = {
    /**
     * Formik object containing form state and handlers.
     */
    formik: PropTypes.shape({
      values: PropTypes.object.isRequired,
      handleChange: PropTypes.func.isRequired,
      handleBlur: PropTypes.func.isRequired,
      handleSubmit: PropTypes.func.isRequired,
      touched: PropTypes.object.isRequired,
      errors: PropTypes.object.isRequired,
      isSubmitting: PropTypes.bool.isRequired,
    }).isRequired,
  
    /**
     * Flag indicating whether the form has changed.
     */
    isChanged: PropTypes.bool.isRequired,
  };

export default MasterDetailsForm;
