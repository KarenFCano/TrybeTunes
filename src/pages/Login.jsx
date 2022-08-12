import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as EmailValidator from 'email-validator';
import '../styles/pages/login.css';

function Login() {
  const [user, setUser] = useState({
    nome: '',
    email: '',
  });
  console.log('loginpage');
  const [btnDisable, setBtnDisable] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  // const checkSelector = useSelector(({ reducer }) => (reducer));
  // console.log(checkSelector);
  const { nome, email } = user;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'SET_LOGIN', payload: { nome, email } });
    history.push('/search');
  };

  useEffect(() => {
    const MIN_LENGTH = 3;
    const emailValid = EmailValidator.validate(email);
    if (nome.length >= MIN_LENGTH && emailValid) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
    // console.log(nome);
  }, [nome, email]);

  const handleChange = ({ target: { value, name } }) => {
    const MIN_LENGTH = 3;
    const emailValid = EmailValidator.validate(email);
    if (nome.length >= MIN_LENGTH && emailValid) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="container-login">
      <section className="form-login">
        <h1>TrybeFy</h1>
        <form onSubmit={ handleSubmit }>
          <label htmlFor="nome">
            Nome
            <input
              id="nome"
              name="nome"
              type="text"
              value={ nome }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="email">
            E-mail
            <input
              id="email"
              name="email"
              type="text"
              value={ email }
              onChange={ handleChange }
            />
          </label>
          <button
            type="submit"
            disabled={ btnDisable }
          >
            Login
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
