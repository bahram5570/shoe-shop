import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FaUserCircle, FaUnlockAlt, FaAngleLeft } from 'react-icons/fa';
import SigninStructure from './SigninStructure';

const initialValues = {
  Username: '',
  Password: '',
};

const validationSchema = yup.object({
  Username: yup.string().required('Please enter your username'),
  Password: yup
    .string()
    .required('Please enter your password')
    .min(4, 'At least 4 characters'),
});

const Signin = ({ onShow }) => {
  const dark = useSelector((state) => state.darkMode);
  const onSubmit = (e) => {
    console.log(e);
  };

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
        w-80
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
          ${dark ? 'bg-cyan-400' : 'bg-cyan-500'}
          text-neutral-50 
          absolute 
          top-0 
          left-0
        `}
      >
        <h1 className="text-center text-2xl">Sign in</h1>
      </div>

      {/* Username */}
      <SigninStructure
        type={'text'}
        name={'Username'}
        dark={dark}
        icon={
          <FaUserCircle className="absolute top-2 left-2 text-neutral-600" />
        }
        formik={formik}
      />

      {/* Password */}
      <SigninStructure
        type={'password'}
        name={'Password'}
        dark={dark}
        icon={
          <FaUnlockAlt className="absolute top-2 left-2 text-neutral-600" />
        }
        formik={formik}
      />

      <button
        type="submit"
        className={`
          w-full 
          mt-6
          py-1.5 
          ${dark ? 'bg-cyan-400' : 'bg-cyan-500'}
          text-neutral-50 
          text-lg 
          rounded-md
        `}
      >
        Login
      </button>

      <span className="w-full h-0.5 bg-neutral-400 mt-4 mb-6" />

      <button
        onClick={() => onShow()}
        type="button"
        className={`
          flex 
          items-center 
          justify-center 
          w-full 
          py-1  
          ${dark ? 'text-cyan-300' : 'text-cyan-500'}
          border-2 
          text-lg 
          border-cyan-500 
          rounded-md
        `}
      >
        <FaAngleLeft className="mr-3 w-6 h-auto" />
        Create an account
      </button>
    </form>
  );
};

export default Signin;
