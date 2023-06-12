import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../features/contactSlice';
import { ContactType } from '../types';
import Select from 'react-select';

const countryCodes = [
  { value: '+1', label: '+1' },
  { value: '+44', label: '+44' },
  { value: '+91', label: '+91' }
  // Add more country codes as needed
];

const countries = [
  { value: 'USA', label: 'USA' },
  { value: 'UK', label: 'UK' },
  { value: 'INDIA', label: 'INDIA' }
  // Add more countries as needed
];

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues: ContactType = {
    fullName: '',
    mobileNumber: '',
    email: '',
    status: '',
    city: '',
    country: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    mobileNumber: Yup.string().required('Mobile Number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    status: Yup.string().required('Status is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
  });

  const handleSubmit = (values: ContactType, { resetForm }: any) => {
    dispatch(addContact(values));
    resetForm();
  };

  const handleCountryCodeChange = (selectedOption: any, formikProps: any) => {
    formikProps.setFieldValue('mobileNumber', `${selectedOption.value} ${formikProps.values.mobileNumber}`);
  };

  const handleCountryChange = (selectedOption: any, formikProps: any) => {
    formikProps.setFieldValue('country', selectedOption.value);
  };

  const handleCancel = () => {
    // Add your cancel/back logic here
    // For example, navigate back to the previous page or clear the form fields
    console.log('Cancel button clicked');
  };
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {(formikProps) => (
        <Form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-1 text-lg font-bold">Full Name</label>
            <Field type="text" id="fullName" name="fullName" className="w-full px-3 py-2 border rounded" />
            <ErrorMessage name="fullName" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block mb-1 text-lg font-bold">Mobile Number</label>
            <div className="flex">
              <div className="w-1/4">
                <Select
                  id="countryCode"
                  name="countryCode"
                  options={countryCodes}
                  onChange={(selectedOption) => handleCountryCodeChange(selectedOption, formikProps)}
                />
              </div>
              <div className="w-3/4">
                <Field
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Enter mobile number"
                />
              </div>
            </div>
            <ErrorMessage name="mobileNumber" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-lg font-bold">Email</label>
            <Field type="email" id="email" name="email" className="w-full px-3 py-2 border rounded" />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="status" className="block mb-1 text-lg font-bold">Status</label>
            <Field as="select" id="status" name="status" className="w-full px-3 py-2 border rounded">
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </Field>
            <ErrorMessage name="status" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block mb-1 text-lg font-bold">City</label>
            <Field type="text" id="city" name="city" className="w-full px-3 py-2 border rounded" />
            <ErrorMessage name="city" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block mb-1 text-lg font-bold">Country</label>
            <Select
              id="country"
              name="country"
              options={countries}
              onChange={(selectedOption) => handleCountryChange(selectedOption, formikProps)}
            />
            <ErrorMessage name="country" component="div" className="text-red-500" />
          </div>

          <button type="submit" className="w-full px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded">Save</button>
          <button type="button" onClick={handleCancel} className="w-full mt-4 px-4 py-2 text-lg font-bold text-gray-500 bg-transparent border border-gray-300 rounded">
            Cancel
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
