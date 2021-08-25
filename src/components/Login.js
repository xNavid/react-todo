import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Login = (props) => {
  const [id, setId] = useState();
  const [name, setName] = useState();

  useEffect(() => {}, []);

  const loginSubmit = async (e) => {
    if (id && name) {
      const user = { id, name };
      localStorage.setItem('user', user);
      // let request = await axios.post("localhost:1337/login");
      props.history.push('/dashboard');
    }
  };

  return (
    <div className='loginConatiner'>
      <div className='card'>
        <div className='card-body'>
          <div className='loginTitle'>Login </div>
          <form>
            <input
              required
              className='loginID'
              type='text'
              placeholder='Name'
              onChange={(e) => setId(e.target.value)}
            />
            <input
              required
              className='loginName'
              type='text'
              placeholder='Password'
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className='btn loginSubmit'
              type='submit'
              onClick={loginSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
