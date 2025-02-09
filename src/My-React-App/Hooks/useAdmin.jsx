import React from 'react';
import useAuth from './UseAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
            const {user} = useAuth();
             console.log(user)
                    const axiosSecure = useAxiosSecure()
            const {data : isAdmin, isPending : isAdminLoading } = useQuery({
                queryKey : ['user.email'],
                queryFn : async () => {
                            const res = await  axiosSecure.get(`/users/admin/${user.email}`);
                            console.log(res)
                             return res.data?.admin
                }
            })
                   console.log(isAdmin)
            return [isAdmin,isAdminLoading]
             
};

export default useAdmin;