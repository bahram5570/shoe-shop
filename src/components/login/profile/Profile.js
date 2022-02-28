import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userEdit } from '../../redux/slices/signinSlice';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ProfileButtons from './ProfileButtons';
import ProfileStructure from './ProfileStructure';
import { FaUserAlt, FaPhoneAlt, FaEnvelope, FaUnlockAlt } from 'react-icons/fa';

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
        className="
          w-full 
          py-2 
          bg-greenColor
          text-neutral-50 
          absolute 
          top-0 
          left-0
        "
      >
        <h1 className="text-center text-2xl">Profile</h1>
      </div>

      {/* Buttons */}
      <ProfileButtons
        dark={dark}
        data={userData}
        onSignout={onSignout}
        isEditing={editMode}
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
