import { Box } from '@mui/system';
import React from 'react';
import CommonLayout from '../commonLayout/CommonLayout';
import Sidebar from './Sidebar';

const ComponentsLayout = ({ children }) => {
  return (
    <CommonLayout>
      <Box sx={{ display: 'flex' }}>
        <Box>
            <Sidebar />
        </Box>
         <Box component="main" pb={8} sx={{ flexGrow: 1 }}>
            <Box sx={{ px: { sm: 0, md: 2 }, width: '100%' }}>
              <Box>{children}</Box>
            </Box>
          </Box>
      </Box>
    </CommonLayout>
  )
}

export default ComponentsLayout;
