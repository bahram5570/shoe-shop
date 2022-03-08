import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSignup } from '../../redux/slices/signupSlice';
import { useFormik } from 'formik';
import * as yup from 'yup';
import SignupStructure from './SignupStructure';
import {
  FaUserAlt,
  FaUserCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaUnlockAlt,
  FaAngleLeft,
} from 'react-icons/fa';

const initialValues = {
  Name: '',
  Username: '',
  Phone: '',
  Email: '',
  Password: '',
  ConfirmPassword: '',
};

const validationSchema = yup.object({
  Name: yup.string().required('Please enter your name'),
  Username: yup.string().required('Please enter your username'),
  Phone: yup
    .string()
    .matches(/^[0-9]{11}$/, 'Phone number must be 11 digits.')
    .required('Please enter your phone number'),
  Email: yup.string().required('Please enter your email'),
  Password: yup
    .string()
    .required('Please enter your password')
    .min(4, 'At least 4 characters'),
  ConfirmPassword: yup
    .string()
    .required('Please enter your password')
    .min(4, 'At least 4 characters')
    .oneOf([yup.ref('Password')], 'Passwords must be equal'),
});

const Signup = ({ onShow }) => {
  const dark = useSelector((state) => state.darkModeRedux);
  const signupStatus = useSelector((state) => state.signupRedux).event;

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    dispatch(userSignup(e));
  };

  useEffect(() => {
    if (signupStatus === "success") {
      dispatch(userSignup(null));
      onShow();
    }
  }, [signupStatus, dispatch, onShow]);

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`
        ${dark ? 'bg-neutral-900' : 'bg-white'}
        ${dark ? '' : 'shadow-[0_0_10px_#777777]'}
        relative
        overflow-hidden
        w-96
        p-4
        pt-12
        rounded-xl
        flex
        flex-col
      `}
    >
      <div
        className={`
          w-full 
          py-2 
          ${dark ? 'bg-purple-600' : 'bg-purple-700'}
          text-neutral-50 
          absolute 
          top-0 
          left-0
        `}
      >
        <h1 className="text-center text-2xl">Sign up</h1>
      </div>

      {/* Name */}
      <SignupStructure
        type={'text'}
        name={'Name'}
        dark={dark}
        icon={<FaUserAlt className="absolute top-2 left-2 text-neutral-600" />}
        formik={formik}
      />

      {/* Username */}
      <SignupStructure
        type={'text'}
        name={'Username'}
        dark={dark}
        icon={
          <FaUserCircle className="absolute top-2 left-2 text-neutral-600" />
        }
        formik={formik}
      />

      {/* Phone */}
      <SignupStructure
        type={'tel'}
        name={'Phone'}
        dark={dark}
        icon={<FaPhoneAlt className="absolute top-2 left-2 text-neutral-600" />}
        formik={formik}
      />

      {/* Email */}
      <SignupStructure
        type={'email'}
        name={'Email'}
        dark={dark}
        icon={<FaEnvelope className="absolute top-2 left-2 text-neutral-600" />}
        formik={formik}
      />

      {/* Password */}
      <SignupStructure
        type={'password'}
        name={'Password'}
        dark={dark}
        icon={
          <FaUnlockAlt className="absolute top-2 left-2 text-neutral-600" />
        }
        formik={formik}
      />

      {/* Confirm Password */}
      <SignupStructure
        type={'password'}
        name={'ConfirmPassword'}
        dark={dark}
        icon={
          <FaUnlockAlt className="absolute top-2 left-2 text-neutral-600" />
        }
        formik={formik}
      />

      {/* Existense user */}
      {signupStatus === "fail" && (
        <p className="text-redColor mt-4">
          This username already exists! Please select another one.
        </p>
      )}

      {/* Signup Button */}
      <button
        type="submit"
        disabled={!formik.isValid}
        className={`
          w-full 
          mt-6
          py-1.5 
          ${dark ? 'bg-purple-600' : 'bg-purple-700'}
          text-neutral-50 
          text-lg 
          rounded-md
          disabled:cursor-not-allowed
          disabled:bg-neutral-500
        `}
      >
        Sign up
      </button>

      <span className="w-full h-0.5 bg-neutral-400 mt-4 mb-6" />

      {/* Go to signin button */}
      <button
        onClick={() => onShow()}
        type="button"
        className={`
          flex 
          items-center 
          justify-center 
          w-full 
          py-1  
          ${dark ? 'text-purple-200' : 'text-purple-700'}
          ${dark ? 'border-purple-600' : 'border-purple-700'}
          border-2 
          text-lg 
          rounded-md
        `}
      >
        <FaAngleLeft className="mr-3 w-6 h-auto" />
        Already have an account
      </button>
    </form>
  );
};

export default Signup;
