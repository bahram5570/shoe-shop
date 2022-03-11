import CartButtons from '../tools/CartButtons';
import AddressCartStructure from './AddressCartStructure';
import { useFormik } from 'formik';
import * as yup from 'yup';

const AddressCart = ({ onAddress, onBack }) => {
  const initialValues = localStorage.getItem('addressCart')
    ? JSON.parse(localStorage.getItem('addressCart'))
    : {
        name: '',
        phone: '',
        city: '',
        address: '',
        postal: '',
      };

  const validationSchema = yup.object({
    name: yup.string().required('Please enter your name'),
    phone: yup
      .string()
      .matches(/^[0-9]{11}$/, 'Phone number must be 11 digits.')
      .required('Please enter your alternative phone nubmer'),
    city: yup.string().required('Please enter your city'),
    address: yup.string().required('Please enter your address'),
    postal: yup
      .string()
      .required('Please enter your postal code')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(4, 'At least 4 digits'),
  });

  const onSubmit = (e) => {
    onAddress(e);
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col items-center">
      <AddressCartStructure
        type="text"
        name="name"
        placeholder="Full Name"
        formik={formik}
      />
      <AddressCartStructure
        type="text"
        name="city"
        placeholder="City"
        formik={formik}
      />
      <AddressCartStructure
        type="text"
        name="address"
        placeholder="Address"
        formik={formik}
      />
      <AddressCartStructure
        type="tel"
        name="phone"
        placeholder="Alternative Phone Number"
        formik={formik}
      />
      <AddressCartStructure
        type="string"
        name="postal"
        placeholder="Postal Code"
        formik={formik}
      />

      <CartButtons buttonName="Next" onBack={onBack} />
    </form>
  );
};

export default AddressCart;
