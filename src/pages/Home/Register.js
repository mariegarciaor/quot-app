import React from 'react';
import useForm from '../../hooks/useForm';
import validate from '../../hooks/validateLogIn';
import {Link} from 'react-router-dom';

const Register = () => {
    const { handleChange, handleSubmit, values, errors, } = useForm (submit, validate);

    function submit () {
        console.log('User registered succesfully');
    }

    return (
        <div class="container-fluid register-page">
            <div className="register-content">
                <div className="register-titles">
                    <h1>Welcome</h1>
                    <h3>Create your account!</h3>
                    <img className="register-logo" src="https://images.squarespace-cdn.com/content/v1/598eaf83d7bdce2890ccead1/1538394638797-OQHCRKZDNE3DAQK9Q090/ke17ZwdGBToddI8pDm48kPqQfq0L3n3wpHIsRapTfg8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcqDw7KJ9JLVnFyPtQWXPW_fGUEh2BflkccjBxWRTaY_RcTR0hSuOiDKazX4Abyxu7/business-card-gif_2.gif?format=1500w" alt="register"></img>
                </div>
                <form  className="register-form">
                    <div class="form-row">
                        <div class="form-group col-md-6 col-sm-12">
                        <label for="inputEmail4">Name</label>
                        <input
                            name="name"
                            type="text"
                            class="form-control"
                            id="inputEmail4"
                            value={values.name}
                            onChange={handleChange} />
                        </div>
                        <div class="form-group col-md-6 col-sm-12">
                        <label for="inputPassword4">Last Name</label>
                        <input
                            name="lastname"
                            type="password"
                            class="form-control"
                            id="inputPassword4" 
                            value={values.lastname}
                            onChange={handleChange} />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6 col-sm-12">
                        <label for="inputEmail4">Email</label>
                        <input
                            name="email"
                            type="email"
                            class="form-control"
                            id="inputEmail4"
                            value={values.email}
                            onChange={handleChange} />
                        </div>
                        <div class="form-group col-md-6 col-sm-12">
                        <label for="inputPassword4">Password</label>
                        <input
                            name="password"
                            type="password"
                            class="form-control"
                            id="inputPassword4"
                            value={values.password}
                            onChange={handleChange} />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6 col-sm-12">
                            <label for="inputAddress">Address</label>
                            <input 
                                name="address"
                                type="text"
                                class="form-control"
                                id="inputAddress"
                                placeholder="1234 Main St"
                                value={values.address}
                                onChange={handleChange} />
                        </div>
                        <div class="form-group col-md-6 col-sm-12">
                            <label for="inputAddress2">Address 2</label>
                            <input
                                name="address2"
                                type="text"
                                class="form-control"
                                id="inputAddress2"
                                placeholder="Apartment, studio, or floor"
                                value={values.address2}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6 col-sm-12">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>Jalisco</option>
                                    <option>Ciudad de México</option>
                                    <option>Monterrey</option>
                                </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputZip">Zip Code</label>
                            <input type="text" class="form-control" id="inputZip"/>
                        </div>
                    </div>           
                    <Link to={'/QuotStart'}><button type="submit" className="btn button-1 register-button">Register</button></Link>
                </form>
            </div>
        </div>
    )
}
           
export default Register;
