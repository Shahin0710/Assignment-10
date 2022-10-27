import { Box, Button } from '@mui/material';
import React from 'react';
import Pdf from "react-to-pdf";

const ReactToPdf = () => {
    const ref = React.createRef();

  return (
    <Box sx={{ m: 10 }}>
      <Box>
           <Pdf targetRef={ref} filename="code-example.pdf">
               {({ toPdf }) => <Button variant="contained" onClick={toPdf}>Download PDF</Button>}
           </Pdf>
      </Box>
      <Box>
        <Box ref={ref}>
            <h1>Hello e Learning School</h1>
            <h2>Start editing to see some magic happen!</h2>
        </Box>
      </Box>
    </Box>
  )
}

export default ReactToPdf;
