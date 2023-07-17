import { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';

import { createAccount } from '../../../redux/actions/AuthAction';
import { useNavigation } from '@react-navigation/native';

export default function UseSignUp() {

  const navigate = useNavigation()

  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false)
  const [server_error, setServerError] = useState({})
  const [values, setValues] = useState({
    password: '',
    confirmPassword: '',
    phone: '',
    nameErr: false,
    emailErr: false,
    phoneErr: false,
    passwordErr: false,
    confirmPasswordErr: false,
    passwordNotMatch: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (prop) => (value) => {
    setValues({ ...values, [prop]: value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const signupHandler =  () => {
      const creds = {
        email: email,
        name: userName,
        phone_number: values.phone,
        password: values.password,
        password2: values.confirmPassword,
      }
      dispatch(createAccount(creds, navigate, setLoading, setServerError))
  }

  // server_error?.filter((err)=> {
  //   if(err?.email) {
  //     setValues({ ...values, emailErr: true });
  //   }
  //   if(err?.name) {
  //     setValues({ ...values, nameErr: true });
  //   }
  //   if(err?.password) {
  //     setValues({ ...values, passwordErr: true });
  //   }
  //   if(err?.password2){
  //     setValues({ ...values, confirmPasswordErr: true });
  //   }
  // })


  return [{ values, loading, handleChange, handleClickShowPassword, email, setEmail, userName, setUserName, signupHandler, server_error }]
}
