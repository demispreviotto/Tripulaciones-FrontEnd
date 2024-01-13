import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import Logo from '../../../assets/Logo';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state.auth.message);
  const status = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.user);

  const [data, setData] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    dispatch(reset());
  }, []);
  // useEffect(() => {
  //     if (status && status === 'succeeded') {
  //         setIsSubmitting(false)
  //         navigate('/')
  //     }

  //     if (status === 'failed') {
  //         setTimeout(() => {
  //             setIsSubmitting(false)
  //         }, 3000)
  //     }
  // }, [status])

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        dispatch(login(data))

    };

    useEffect(() => {
      if (user) {
        const timeoutId = setTimeout(() => {
          navigate("/");
        }, 3000);
        return () => clearTimeout(timeoutId);
      }
    }, [user]);

    return (
        <div className='login'>
            <div className="logo-container">

                <Logo />
                <h2>Cajon Digital</h2>
            </div>
            <div className="form-container">

                {/* <h3>Login</h3> */}
                <form onSubmit={handleOnSubmit}>
                    {/* <label htmlFor="email">Usuario</label> */}
                    <input type="text" name='email' placeholder='Email' onChange={handleOnChange} />
                    {/* <label htmlFor="password">Contrasena</label> */}
                    <input type="password" name='password' placeholder='Password' onChange={handleOnChange} />
                    {message && <p className={status}>{message}</p>}
                    <button type='submit' disabled={isSubmitting}>Login</button>
                    <p>Not a user yet? <span><Link to='/register'>Here</Link></span></p>
                </form>
            </div>
        </div>
    )
}

export default Login;
