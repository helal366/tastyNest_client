import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import Loading from '../components/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {user, loading}=useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoute;