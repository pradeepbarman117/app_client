import { useFormik } from 'formik';
<<<<<<< HEAD
import { allowOnly } from '../../utility/allowOnly';
import { masterServices } from '../../services/master/masterServices';
import masterSchema from '../../validation/masterValidator';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { memo } from 'react';
=======
import { allowOnly } from "../../utils/validation/allowOnly";
import masterSchema from '../../../../../app_client/src/validation/masterValidator';
import Cookies from 'js-cookie';
import { masterServices } from '../../services/master/masterServices';
import toast from 'react-hot-toast';
>>>>>>> fe76fd557da426803569ab39d8a9e9e2d64d0c80


const CreateMaster = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            passcode: '',
            percent: '',
        },
<<<<<<< HEAD
        validationSchema: masterSchema,
        onSubmit: async (values, {setSubmitting,resetForm}) => {
            let adminId = JSON.parse(Cookies.get().user).id.toString();
            let token = Cookies.get('token');
            try {
                const res = await masterServices.create({...values,adminId},token);
=======
        validationSchema: masterSchema ,
        onSubmit: async (values, {setSubmitting,resetForm}) => {
            let token = Cookies.get('token');
            try {
                const res = await masterServices.create(values,token);
>>>>>>> fe76fd557da426803569ab39d8a9e9e2d64d0c80
                if(res.status === 201){
                    toast.success('Master created successfully');
                    resetForm();
                }
            } catch (error) {
                if (error.status === 400) {
                    toast.error(`Failed: ${error.response.data.message}`);
                } else if (error.status === 401) {
                    toast.error('Unauthorized. Please login again.', );
                } else {
                    toast.error('An error occurred. Please try again.');
                }
            } finally {
                setSubmitting(false); // Reset submitting state
            }
        },
    });

    return (
        <>
            <div className="flex justify-center px-4 py-5 flex-1">
                <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5">
                    <form onSubmit={formik.handleSubmit}>

                        {/* Email input */}
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-1">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
                                    Name
                                </p>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border border-[#d1dde6] bg-[#E8EDF2] focus:border-[#d1dde6] h-14 placeholder:text-[#507a95] p-[15px] text-base font-normal leading-normal"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    onKeyDown={allowOnly.char}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <div className="text-red-500 text-sm">{formik.errors.name}</div>
                                )}
                            </label>
                        </div>

                        {/* Email input */}
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-1">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
                                    Email address
                                </p>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border border-[#d1dde6] bg-[#E8EDF2] focus:border-[#d1dde6] h-14 placeholder:text-[#507a95] p-[15px] text-base font-normal leading-normal"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="text-red-500 text-sm">{formik.errors.email}</div>
                                )}
                            </label>
                        </div>

                        {/* Password input */}
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-1">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
                                    Password
                                </p>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border border-[#d1dde6] bg-[#E8EDF2] focus:border-[#d1dde6] h-14 placeholder:text-[#507a95] p-[15px] text-base font-normal leading-normal"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    autoComplete=''
                                />
                                {formik.touched.password && formik.errors.password && (
                                    <div className="text-red-500 text-sm">{formik.errors.password}</div>
                                )}
                            </label>
                        </div>

                        {/* Passcode input (optional) */}
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-1">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
                                    Passcode
                                </p>
                                <input
                                    type="text"
                                    name="passcode"
                                    placeholder="Passcode"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border border-[#d1dde6] bg-[#E8EDF2] focus:border-[#d1dde6] h-14 placeholder:text-[#507a95] p-[15px] text-base font-normal leading-normal"
                                    value={formik.values.passcode}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    onKeyDown={allowOnly.number}
                                    maxLength={4}
                                />
                                {formik.touched.passcode && formik.errors.passcode && (
                                    <div className="text-red-500 text-sm">{formik.errors.passcode}</div>
                                )}
                            </label>
                        </div>

                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-1">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e161b] text-base font-medium leading-normal pb-2">
                                    Percentage
                                </p>
                                <input
                                    type="text"
                                    name="percent"
                                    placeholder="eg. 30%"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border border-[#d1dde6] bg-[#E8EDF2] focus:border-[#d1dde6] h-14 placeholder:text-[#507a95] p-[15px] text-base font-normal leading-normal"
                                    value={formik.values.percent}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    onKeyDown={allowOnly.number}
                                    maxLength={3}
                                />
                                {formik.touched.percent && formik.errors.percent && (
                                    <div className="text-red-500 text-sm">{formik.errors.percent}</div>
                                )}
                            </label>
                        </div>

                        {/* Submit button */}
                        <div className="flex px-4 py-3">
                            <button
                                type="submit"
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#1f93e0] text-[#f8fafb] text-sm font-bold leading-normal tracking-[0.015em]"
                                disabled={formik.isSubmitting}
                            >
                                {formik.isSubmitting ? 'Creating master...' : 'Create Master'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

<<<<<<< HEAD
export default memo(CreateMaster)
=======
export default CreateMaster
>>>>>>> fe76fd557da426803569ab39d8a9e9e2d64d0c80



