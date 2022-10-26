import { Backdrop, CircularProgress } from '@mui/material';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    if(loading) {
        return <div>
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
                    <CircularProgress color="inherit" />
                </Backdrop>
        </div>
    }

    if (user && user.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default ProtectedRoute;
