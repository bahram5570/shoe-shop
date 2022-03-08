import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userSignout } from '../../redux/slices/signinSlice';
import { userEdit } from '../../redux/slices/signinSlice';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ProfileButtons from './ProfileButtons';
import ProfileStructure from './ProfileStructure';
import Permission from './Permission';
import {
  FaUserAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUnlockAlt,
  FaCheckSquare,
} from 'react-icons/fa';

const validationSchema = yup.object({
  Name: yup.string().required('Please enter your name'),
  Phone: yup
    .string()
    .matches(/^[0-9]{11}$/, 'Phone number is not valid!')
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

const Profile = ({ onSignout }) => {
  const userStatus = useSelector((state) => state.signinRedux).loggedUser;
  // console.log(userStatus)

  const userData = {
    Name: userStatus ? userStatus.Name : '',
    Username: userStatus ? userStatus.Username : '',
    Phone: userStatus ? userStatus.Phone : '',
    Email: userStatus ? userStatus.Email : '',
    Password: '',
    ConfirmPassword: '',
  };

  const initialValues = userData;

  useEffect(() => {
    if (userStatus === null) {
      onSignout();
    }
  }, [userStatus, onSignout]);

  const dark = useSelector((state) => state.darkModeRedux);

  const dispatch = useDispatch();

  const applyEditHandler = () => {
    if (formik.isValid) {
      dispatch(userEdit(formik.values));
    }
  };

  const [editMode, setEditMode] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  const [showPermission, setShowPermission] = useState(false);

  const signoutHandler = () => {
    dispatch(userSignout());
    onSignout();
  };

  return (
    <form
      className={`
        ${dark ? 'bg-neutral-900' : 'bg-white'}
        ${dark ? '' : 'shadow-[0_0_10px_#777777]'}
        relative
        overflow-hidden
        w-96
        p-4
        pt-16
        rounded-xl
        flex
        flex-col
      `}
    >
      {showPermission &&
        createPortal(
          <Permission
            message="Signout your account?"
            onNo={() => setShowPermission(false)}
            onYes={() => signoutHandler()}
          />,
          document.getElementById('Permission')
        )}

      <div
        className="
          w-full 
          py-2 
          bg-greenColor
          text-neutral-50 
          absolute 
          top-0 
          left-0"
      >
        <h1 className="text-center text-2xl">Profile</h1>
      </div>

      {/* Buttons */}
      <ProfileButtons
        dark={dark}
        data={userData}
        isEditing={editMode}
        // onSignout={onSignout}
        onSignout={() => setShowPermission(true)}
        onEditing={() => setEditMode(!editMode)}
        onApplyEdit={() => applyEditHandler()}
      />

      {/* Name */}
      <ProfileStructure
        type={'text'}
        name={'Name'}
        dark={dark}
        icon={<FaUserAlt className="absolute top-2 left-2" />}
        formik={formik}
        isDisabled={!editMode}
      />

      {/* Phone */}
      <ProfileStructure
        type={'tel'}
        name={'Phone'}
        dark={dark}
        icon={<FaPhoneAlt className="absolute top-2 left-2" />}
        formik={formik}
        isDisabled={!editMode}
      />

      {/* Email */}
      <ProfileStructure
        type={'email'}
        name={'Email'}
        dark={dark}
        icon={<FaEnvelope className="absolute top-2 left-2" />}
        formik={formik}
        isDisabled={!editMode}
      />

      {/* Orders */}
      {!editMode && (
        <span className="flex items-center justify-between">
          <p
            className={`flex items-center text-lg ml-1 mt-3 ${
              dark ? 'text-white' : ''
            }`}
          >
            <FaCheckSquare className="mr-1 w-6 h-auto" />
            Total Orders: {userStatus.orders.length}
          </p>

          <button
            type="button"
            className={`
          bg-none
          pt-3
          text-lg
          ${dark ? 'text-cyan-300' : 'text-[#0088ff]'}
          `}
          >
            Deatils
          </button>
        </span>
      )}

      {/* Password */}
      {editMode && (
        <ProfileStructure
          type={'password'}
          name={'Password'}
          dark={dark}
          icon={<FaUnlockAlt className="absolute top-2 left-2" />}
          formik={formik}
        />
      )}

      {/* Confirm Password */}
      {editMode && (
        <ProfileStructure
          type={'password'}
          name={'ConfirmPassword'}
          dark={dark}
          icon={<FaUnlockAlt className="absolute top-2 left-2" />}
          formik={formik}
        />
      )}
    </form>
  );
};

export default Profile;
