import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import React from 'react';
import CommonLayout from '../commonLayout/CommonLayout';
import Sidebar from './Sidebar';

const ComponentsLayout = ({ children }) => {
  const theme = useTheme();
  // FOR MOBILE RESPONSIVE
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    // <CommonLayout>
    //   <Box sx={{ display: 'flex' }}>
    //     <Box>
    //         {matches && <Sidebar />}
    //     </Box>
    //      <Box component="main" pb={8} sx={{ flexGrow: 1 }}>
    //         <Box sx={{ px: { sm: 0, md: 2 }, width: '100%' }}>
    //           <Box>{children}</Box>
    //         </Box>
    //       </Box>
    //   </Box>
    // </CommonLayout>
    <CommonLayout>
      <Box sx={{ display: 'flex' }}>
        {matches && <Sidebar />}
        <Box sx={{ m: 5 }}>
          {children}
        </Box>
      </Box>
    </CommonLayout>
  )
}

export default ComponentsLayout;
