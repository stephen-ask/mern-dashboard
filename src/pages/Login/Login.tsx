import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation  } from '../../redux/features/authSlice/';
import { InputField } from '../../components/InputField.js';
import { LoginErr, LoginUser } from '../../models/user.model.js';
import { Button } from '../../components/Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

function Login() {
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [formErrors, setFormErrors] = useState<LoginErr>({});



  const dispatch = useDispatch();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: value.trim() === '' ? `Please provide a ${name}` : '' });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Basic form validation
    const errors: LoginErr = {};
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
      username: formData.username,
      password: formData.password
    };
    
    let is_user_logged_in = await loginUser(payload).unwrap(); 
    if(is_user_logged_in.status == 201) {
      toast.success(is_user_logged_in.msg);
      navigate('/');
    }
    toast(is_user_logged_in.msg);

    console.log(is_user_logged_in.msg);
  };


  return (
    <div className="login-wrp">
      <h1>Login</h1>
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
            errorMessage={formErrors?.username}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            errorMessage={formErrors?.password}
          />
        </div>
        <div className="submit-wrap">
          <Button
            type="submit"
            value="Submit form"
            extraClassName="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}


export default Login;

