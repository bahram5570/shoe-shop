import { useSelector } from 'react-redux';
import {
  FaUserAlt,
  FaUserCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaUnlockAlt,
  FaAngleLeft,
} from 'react-icons/fa';

import SignupStructure from './SignupStructure';

const Signup = ({ onShow }) => {
  const dark = useSelector((state) => state.darkMode);

  return (
    <form
      className={`
        ${dark ? 'bg-neutral-900' : 'bg-white'}
        ${dark ? '' : 'shadow-[0_0_10px_#777777]'}
        relative
        overflow-hidden
        w-80
        p-4
        pt-16
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
      />

      {/* Username */}
      <SignupStructure
        type={'text'}
        name={'Username'}
        dark={dark}
        icon={
          <FaUserCircle className="absolute top-2 left-2 text-neutral-600" />
        }
      />

      {/* Phone */}
      <SignupStructure
        type={'tel'}
        name={'Phone'}
        dark={dark}
        icon={<FaPhoneAlt className="absolute top-2 left-2 text-neutral-600" />}
      />

      {/* Email */}
      <SignupStructure
        type={'email'}
        name={'Email'}
        dark={dark}
        icon={<FaEnvelope className="absolute top-2 left-2 text-neutral-600" />}
      />

      {/* Password */}
      <SignupStructure
        type={'password'}
        name={'Password'}
        dark={dark}
        icon={
          <FaUnlockAlt className="absolute top-2 left-2 text-neutral-600" />
        }
      />

      {/* Confirm Password */}
      <SignupStructure
        type={'password'}
        name={'Confirm Password'}
        dark={dark}
        icon={
          <FaUnlockAlt className="absolute top-2 left-2 text-neutral-600" />
        }
      />

      {/* Signup Button */}
      <button
        type="submit"
        className={`
          w-full 
          py-1.5 
          ${dark ? 'bg-purple-600' : 'bg-purple-700'}
          text-neutral-50 
          text-lg 
          rounded-md
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
          border-2 
          text-lg 
          ${dark ? 'border-purple-600' : 'border-purple-700'}
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
