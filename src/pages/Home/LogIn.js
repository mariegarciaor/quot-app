import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import validate from '../../hooks/validateLogIn';
import '../../styles/sass/main.css';

const LogIn = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(submit, validate);

  function submit() {
    console.log('Submitted Succesfully');
  }

    return (
      <div className="login-cover">
        <section className="container login-description">
          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <h4>Inicia sesión</h4>
            <div className="email form-group row">
              <div className="col-sm-10">
                <input 
                  name="email"
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="E-mail"
                  value={values.email}
                  onChange={handleChange}
                  />
                {errors.email && <div className="alert alert-danger">{errors.email}</div>}
              </div>
            </div>

            <div className="password form-group row">
              <div className="col-sm-10">
                <input 
                  name="password"
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Contraseña"
                  value={values.password}
                  onChange={handleChange}
                  />
                {errors.password && <div className="alert alert-danger">{errors.password}</div>}
              </div>
            </div>

            <div className="checkbox form-group row">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                <label className="form-check-label" Mfor="gridCheck1">
                  Recordar cuenta
                </label>
              </div>
              <a className="olvidaste-contraseña" href="/ComingSoon">¿Olvidaste tu contraseña?</a>
            </div>
            
            <div className="inicio form-group row">
              <div className="col-sm-10">
                <a href="/QuoteStart">
                  <button className="btn btn-primary button-1" type="submit" onClick={handleSubmit}>
                  Log In
                  </button>
                </a>
              </div>
            </div>

            <div>
              <p>¿No tienes cuenta? <a href="/Register">Registrate</a></p>
            </div>
          </form>
        </section>
      </div>      
    )
};


export default LogIn;