import { Stack, Typography } from '@mui/material';
import React from 'react';
import CommonLayout from '../commonLayout/CommonLayout';

const PageNotFound = function () {
    return (
        <CommonLayout>
            <Stack justifyContent="center" sx={{ minHeight: '80vh' }}>
                <Typography variant="h1" color="error" align="center" gutterBottom>
                    Sorry, Page Not Found !
                </Typography>
            </Stack>
        </CommonLayout>
    );
};

export default PageNotFound;