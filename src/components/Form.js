import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';

const Form = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required("Your Full Name is required."),
        email: yup.string().email().required(),
        age: yup.number().positive(),
        password: yup.string().min(8).max(16).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match.").required(),
    }) 

    const { register, handleSubmit, formState: {errors} } = useForm({
            resolver: yupResolver(schema),
        });

    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Full Name" {...register("fullName")} />
         <p>{ errors.fullName?.message }</p>
          <input type="text" placeholder="Email" {...register("email")}/>
          <input type="number" placeholder="Age" {...register("age")}/>
          <input type="password" placeholder="Password" {...register("password")}/>
          <input type="password" placeholder="Confirm Password" {...register("confirmPassword")}/>
          <input type="submit" />
    </form>
  )
}

export default Form