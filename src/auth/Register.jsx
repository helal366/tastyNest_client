import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../contexts-providers/AuthContext';
import { toast } from 'react-toastify';
import GoogleSignInButton from '../components/GoogleSignInButton';

const Register = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const [errorMessage, setErrorMessage]=useState('')
    const {userRegister, userUpdate,user, setUser, setLoading}=useContext(AuthContext);
    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const formData=new FormData(form);
        const name=formData.get('name');
        const email=formData.get('email');
        const photoURL=formData.get('photo')
        const password=formData.get('password');
        console.log(email, password);
        // password validation
        const passwordRegEx=/(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        setErrorMessage('')
        if(!passwordRegEx.test(password)){
            setErrorMessage('Password must have minimum six characters including minimum one uppercase letter and minimum one lowercase letter');
            return
        }
        userRegister(email, password)
        .then(result=>{
            const userFirebase=result.user;
            const uid=result.user?.uid;
            console.log(result.user, uid);
            setLoading(false)
            // update userdata for firebase
            userUpdate({
                displayName: name,
                photoURL: photoURL
            }).then(()=>{
                setUser({...userFirebase, displayName: name,
                photoURL: photoURL});
                toast.success(`${email} has registered successfully`);
                navigate(`${location.state?location.state:'/'}`)
                form.reset();
            }).catch(err=>{
                toast.error(err.message)
                setUser(user)
            })
        }).catch(err=>{
            toast.error(err.message)
        })

    }
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className='text-3xl text-center font-semibold mb-4'>Please Register Here!</h2>
        <form onSubmit={handleRegister}
         className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input w-full" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input w-full" placeholder="Email" />
          <label className="label">Photo URL</label>
          <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input w-full" placeholder="Password" 
         />
          
          <button type='submit'
           className="btn bg-teal-500 text-gray-950 hover:bg-teal-900 hover:text-gray-100 mt-2">Register</button>
           {
            errorMessage && <p className='text-red-600'>Password must have minimum six characters including minimum one uppercase letter and minimum one lowercase letter</p>
           }
        </form>
        <GoogleSignInButton location={location}></GoogleSignInButton>
           <p>Already registered? &nbsp;
            <Link to='/auth/login' className='text-teal-600 underline'>Go to Login</Link>
           </p>
      </div>
    </div>
    );
};

export default Register;