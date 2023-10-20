import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ 
        email: '', 
        name: '',
        height:'',
        currentWeight:'',
        desiredWeight: '',
        birthday: '',
        blood: '',
        sex: '',
        levelActivity: '',
    }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
    }) => (
        <form onSubmit={handleSubmit}>
        
        <label htmlFor="name">Basic info</label>  
          <input
            type="text"
            name="name"
            id='name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name && errors.name}
          
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}

        <label htmlFor="height">Height</label>  
          <input
            type="text"
            name="height"
            id='height'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.height}
          />
          {errors.height && touched.height && errors.height}
        
        <label htmlFor="currentWeight">Current Weight</label>  
          <input
            type="text"
            name="currentWeight"
            id='currentWeight'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.currentWeight}
          />
          {errors.currentWeight && touched.currentWeight && errors.currentWeight}
        
        <label htmlFor="desiredWeight">Desired Weight</label>  
          <input
            type="text"
            name="desiredWeight"
            id='desiredWeight'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.desiredWeight}
          />
          {errors.desiredWeight && touched.desiredWeight && errors.desiredWeight}
        
        <label htmlFor="birthday">Desired Weight</label>  
          <input
            type="text"
            name="birthday"
            id='birthday'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.birthday}
          />
          {errors.birthday && touched.birthday && errors.birthday}
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="One" />
              One
            </label>
            <label>
              <Field type="radio" name="picked" value="Two" />
              Two
            </label>
            <div>Picked: {values.picked}</div>
          </div>

          

          <button type="submit" disabled={isSubmitting}>
            Save
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;