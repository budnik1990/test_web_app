import React from 'react'
import logo from '../sources/logo.svg'
import '../stiles/Auth.css';

// import { Link } from 'react-router-dom';

import InputField from './elements/InputField'

export const LoginPage = (setToken) => {
  return (
    <>

      <div className="container-fluid">

        <div className="jumbotron vertical-center">
          <div className="container-fluid auth-column p-0" /* style={{ backgroundColor: "green" }} */>

            <div className='mb-4 text-center'>
              <img src={logo} height='60' className='mb-4' />
            </div>

            <h6 className='text-center'>SIGN IN</h6>

            <InputField type='email' title='Email'></InputField>

            {/* <Link to="/">Home</Link> */}

          </div>
        </div>

      </div>

    </>
  );
}
