// src/pages/Login.js
import { useFormik } from 'formik';
import loginSchema from '../../../utils/validation/forms/loginValidator';
import { allowOnly } from '../../../utils/validation/allowOnly';
import { useAuth } from '../../../hooks/useAuth';
import { Toaster } from 'react-hot-toast';

const Login = () => {

    const { login } = useAuth()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passcode: '',
        },
        validationSchema: loginSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                await login(values);
            }catch(err){
                console.error(err);
            } 
            finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <>
            <div className="relative flex min-h-screen flex-col bg-[#f8fafb] group/design-root overflow-x-hidden">
                <div className="layout-container h-full flex flex-col justify-center">
                    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8eef3] px-10 py-3">
                        <div className="flex items-center gap-4 text-[#0e161b]">
                            <div className="size-4">
                                <svg
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_6_319)">
                                        <path
                                            d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                                            fill="currentColor"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6_319">
                                            <rect width={48} height={48} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h2 className="text-[#0e161b] text-lg font-bold leading-tight tracking-[-0.015em]">
                                Acme Co
                            </h2>
                        </div>
                        <div className="flex flex-1 justify-end gap-8">
                            <div className="flex gap-2">
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e8eef3] text-[#0e161b] text-sm font-bold leading-normal tracking-[0.015em]">
                                    <span className="truncate">Help</span>
                                </button>
                                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e8eef3] text-[#0e161b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                                    <div
                                        className="text-[#0e161b]"
                                        data-icon="Moon"
                                        data-size="20px"
                                        data-weight="regular"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20px"
                                            height="20px"
                                            fill="currentColor"
                                            viewBox="0 0 256 256"
                                        >
                                            <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                style={{
                                    backgroundImage:
                                        'url("https://cdn.usegalileo.ai/sdxl10/0c76f4e0-19f2-4c91-9122-46a138f1cf0b.png")'
                                }}
                            />
                        </div>
                    </header>

                    <div className="flex justify-center px-4 py-5 flex-1">
                        <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5">
                            <h3 className="text-[#0e161b] tracking-light text-2xl font-bold leading-tight px-4 text-left pb-2 pt-5">
                                Welcome back
                            </h3>

                            <form onSubmit={formik.handleSubmit}>
                                {/* Email input */}
                                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
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
                                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
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
                                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
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

                                {/* Submit button */}
                                <div className="flex px-4 py-3">
                                    <button
                                        type="submit"
                                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#1f93e0] text-[#f8fafb] text-sm font-bold leading-normal tracking-[0.015em]"
                                        disabled={formik.isSubmitting}
                                    >
                                        {formik.isSubmitting ? 'Logging in...' : 'Log in'}
                                    </button>
                                </div>

                                {/* Forgot password link */}
                                <p className="text-[#507a95] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
                                    Forgot your password?
                                </p>

                                {/* Sign-up button */}
                                <p className="text-[#507a95] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
                                    Don&apos;t have an account?
                                </p>
                                <div className="flex px-4 py-3">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#e8eef3] text-[#0e161b] text-sm font-bold leading-normal tracking-[0.015em]">
                                        <span className="truncate">Sign up</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster/>
        </>
    );
};

export default Login;
