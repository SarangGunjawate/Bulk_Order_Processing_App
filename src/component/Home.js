import { Typography, Box } from '@mui/material'
import React from 'react'

function Home() {
  return (
    <React.Fragment>
      <Box sx={{backgroundColor: '#364153', height: '100vh'}}>
      <p style={{paddingTop: 250}}>
      <Typography sx={{fontSize: 40, textAlign: 'center', color: 'white'}}>
        Bulk Order Processing App
      </Typography>
      </p>
      </Box>
    </React.Fragment>
  )
}

export default Home