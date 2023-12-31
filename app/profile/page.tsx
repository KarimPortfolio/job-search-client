'use client'

import { checkAuth, setTokenCookie } from '@/redux/slices/auth/globalAuthSlice';
import { useAppDispatch } from '@/redux/store';
import { headers } from 'next/dist/client/components/headers';
import { useEffect } from 'react';

const ProfilePage = () => {

    const dispatch = useAppDispatch();

    useEffect( () => {
        dispatch(checkAuth());
        dispatch(setTokenCookie());
    },[dispatch])

    return(
        <>
            <h1 className="text-center text-7xl mt-20">Profile Page</h1>
        </>
    )
}

export default ProfilePage;
