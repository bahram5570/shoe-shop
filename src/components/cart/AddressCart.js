import CartButtons from './CartButtons';
import CartAddressStructure from './CartAddressStructure';
import { useFormik } from 'formik';
import * as yup from 'yup';

const initialValues = {
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

const AddressCart = ({ onAddress }) => {
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
      <CartAddressStructure
        type="text"
        name="name"
        placeholder="Full Name"
        formik={formik}
      />
      <CartAddressStructure
        type="text"
        name="city"
        placeholder="City"
        formik={formik}
      />
      <CartAddressStructure
        type="text"
        name="address"
        placeholder="Address"
        formik={formik}
      />
      <CartAddressStructure
        type="tel"
        name="phone"
        placeholder="Alternative Phone Number"
        formik={formik}
      />
      <CartAddressStructure
        type="string"
        name="postal"
        placeholder="Postal Code"
        formik={formik}
      />

      <CartButtons buttonName="Next" />
    </form>
  );
};

export default AddressCart;
