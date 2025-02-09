import React from 'react';
import useAuth from '../Hooks/UseAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
  
    const {user,loading} = useAuth();
    const [isAdmin,isAdminLoading] = useAdmin();
    const navigate = useNavigate();

    if(loading || isAdminLoading){
       return <Loading></Loading>
    }

    if(user && isAdmin){
       return children
    }


return  <Navigate to='/login'></Navigate>
};

export default AdminRoute;