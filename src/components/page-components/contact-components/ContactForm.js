import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { ContactFormBox } from '../../re-usable/styles/ContentStyles';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  fullName: yup
    .string('Enter your Full Name')
    .required('Full Name is required'),
  email: yup
    .string('Enter your Email')
    .email('Enter a valid Email')
    .required('Email is required'),
  phone: yup
    .string('Enter your Phone Number')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone Number is required'),
  message: yup.string('Enter a Message').required('A Message is required'),
});

function ContactForm() {
  const [isSent, setIsSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      fetch('https://0cec9107-5bdb-4206-a502-4628165230c0.mock.pstmn.io', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then(() => {
        setIsSent(true);
        console.log('submitted');
      });
    },
  });
  return (
    <ContactFormBox>
      {!isSent ? (
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id='fullName'
            name='fullName'
            label='Full Name'
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
          <TextField
            fullWidth
            id='email'
            name='email'
            label='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id='phone'
            name='phone'
            label='Phone'
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <TextField
            fullWidth
            id='message'
            name='message'
            label='Message'
            multiline
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            minRows={3}
          />
          <Button color='primary' variant='contained' fullWidth type='submit'>
            Submit
          </Button>
        </form>
      ) : (
        <p style={{ textAlign: 'center' }}>Success</p>
      )}
    </ContactFormBox>
  );
}

export default ContactForm;
