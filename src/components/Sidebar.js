import { Box } from '@mui/system';
import React from 'react';
import CommonLayout from '../commonLayout/CommonLayout';

const Sidebar = ({ children }) => {
  return (
    <CommonLayout>
      <Box sx={{ display: 'flex' }}>
        <Box>
            <h1>Sidebar</h1>
            <h1>Sidebar</h1>
            <h1>Sidebar</h1>
            <h1>Sidebar</h1>
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

export default Sidebar;
