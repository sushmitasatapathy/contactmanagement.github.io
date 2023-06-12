import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  mobileNumber: Yup.string().required('Mobile Number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  status: Yup.string().required('Status is required'),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country is required'),
});

export {};

export default validationSchema;
