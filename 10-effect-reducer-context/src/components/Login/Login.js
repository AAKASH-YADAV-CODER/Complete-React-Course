import React, { useState, useEffect, useReducer, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/INPUT/Input';
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isvalid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value, isvalid: state.value.includes('@')
    };
  }
  return { value: '', isvalid: false };
};
const pswdReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isvalid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value, isvalid: state.value.trim().length > 6
    };
  }
  return { value: '', isvalid: false };
};
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // States
  const [formIsValid, setFormIsValid] = useState(false);

  // Refs(referance)
  const inputemailRefs = useRef();
  const inputpasswordRefs = useRef();

  // Reducer
  const [enterEmailstate, dispatchEmail] = useReducer(emailReducer, { value: '', isvalid: null });
  const [enterPasswordstate, dispatchPassword] = useReducer(pswdReducer, { value: '', isvalid: null });

  const { isvalid: emailisvalid } = enterEmailstate;
  const { isvalid: passwordisvalid } = enterPasswordstate;
  // Effect
  useEffect(() => {
    const Identify = setTimeout(() => {
      console.log('testing for every key strock');
      setFormIsValid(
        emailisvalid && passwordisvalid
      );
    }, 500);
    return () => {
      console.log('clearn up');
      clearTimeout(Identify);
    };
  }, [emailisvalid, passwordisvalid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    // setFormIsValid(event.target.value.includes('@') && enterEmailstate.isvalid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
    // setFormIsValid(event.target.value.trim().length > 6 && enterPasswordstate.isvalid);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enterEmailstate, enterPasswordstate);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={inputemailRefs}
          type="email"
          id="email"
          label="E-mail"
          isvalid={emailisvalid}
          value={enterEmailstate.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={inputpasswordRefs}
          type="password"
          id="password"
          label="Password"
          isvalid={passwordisvalid}
          value={enterPasswordstate.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
