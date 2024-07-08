import { Button, Label, TextInput, Alert, Spinner } from 'flowbite-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { signInSuccess, signInFailure, signInStart } from '../redux/user/userSlice.js';
import OAuth from '../components/OAuth.jsx';

export default function SignIn() {
  {
    const [formData, setFormData] = React.useState({});
    const { loading, error: errorMessage } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
      setFormData({...formData, [e.target.id]: e.target.value.trim()})
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(!formData.email|| !formData.password) {
        return dispatch(signInFailure('Please fill all the fields'))
      }
  
      try {
        dispatch(signInStart());
        const res = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        
        if(data.success === false) {
          dispatch(signInFailure(data.message));
        }
        
        if (res.ok) {
          dispatch(signInSuccess(data));
          navigate('/')
        }
      } catch (err) {
        dispatch(signInFailure(err.message));
      }
    }
  
    console.log(formData)
  
    return (
      <div className='min-h-screen mt-20'>
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          {/* Left */}
          <div className="flex-1">
          <Link to= "/" className='font-bold dark:text-white text-4xl'>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Jan's </span>
              Blog
          </Link>
          <p className='text-sm mt-5'>
            This a demo project. You can sign-up with your email and password or with google.
          </p>
          </div>
          {/* Right */}
          <div className="flex-1">
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              {/* <div>
                <Label value="Your username"/>
                <TextInput
                  type='text'
                  placeholder='Username'
                  id= 'username'
                  onChange={handleChange}
                  />
              </div> */}
              <div>
                <Label value="Your email"/>
                <TextInput
                  type='email'
                  placeholder='Email'
                  id= 'email'
                  onChange={handleChange}
                  
                  />
              </div>
              <div>
                <Label value="Your password"/>
                <TextInput
                  type='password'
                  placeholder='*********'
                  id= 'password'
                  onChange={handleChange}
                  />
              </div>
              <Button gradientDuoTone='purpleToPink' type="submit" disabled={loading}>
                {
                  loading? (
                    <>
                    <Spinner size= "sm"/>
                    <span className='pl-3'>Loading...</span>
                    </>
                  ) : "Sign In"
                }
              </Button>
              <OAuth/>      
            </form>
            <div className='flex gap-2 text-sm mt-4'>
              <span>Don't have an account? </span>
              <Link to= '/sign-up' className='text-blue-500'>
                Sign Up
              </Link>
            </div>
            {
              errorMessage && (
                <Alert className='mt-5' color='failure'>
                  {errorMessage}
                </Alert>
              )
            }
          </div>
        </div>
      </div>
    )
  }
  
}