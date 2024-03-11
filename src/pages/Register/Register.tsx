import axios from 'axios';
import React, { useState } from'react';
import { useDispatch, useSelector } from 'react-redux';
import "./assets/common.css"
import {  RegisterErr } from '../../models/user.model';
import { useRegisterUserMutation } from '../../redux/features/authSlice';
import { Button } from '../../components/Button/Button.js';
import { InputField } from '../../components/InputField';


function Register() {
  const [formData, setFormData] = useState({ 
    username: '', 
    password: '',
    phone: '',
  });
  const [formErrors, setFormErrors] = useState<RegisterErr>({});
  const dispatch = useDispatch();
 
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: value.trim() === '' ? `Please provide a ${name}` : '' });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Basic form validation
    const errors: RegisterErr = {};
    if (!formData.username.trim()) {
      errors.username = 'Please provide a username';
    }
    if (!formData.password.trim()) {
      errors.password = 'Please provide a password';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    let payload = { 
      "username": formData.username, 
      "password": formData.password,
      "phone": formData.phone  
    }
    console.log(payload);
    // dispatch(registerUser(payload));

  };
return ( 
  <>
     <div className="register-wrp">
      <h1>Register</h1>
      <form className="g-3 needs-validation"  
      onSubmit={handleSubmit}
      >
       <div className="mb-5">
          <InputField
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            errorMessage={formErrors.username}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            errorMessage={formErrors.password}
          />
          <InputField
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            errorMessage={formErrors.phone}
          />
        </div>
        <div className="submit-wrap">
          <Button value="Register" extraClassName="btn btn-primary" />
        </div>
      </form>
    </div>
  </>
)}

export default Register;