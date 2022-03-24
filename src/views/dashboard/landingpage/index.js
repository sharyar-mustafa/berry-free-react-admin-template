import React from 'react'
import ResponsiveAppBar from './Navber'

export default function Landingpage() {
  return (
    <Grid item xs={12} sx={{
        marginTop: '1rem'
    }} >
        <Grid container spacing={gridSpacing}>
            <Grid item lg={12} md={12} sm={12} xs={12}> 
            <ResponsiveAppBar/>
           
           </Grid>
            
        </Grid>

    </Grid>
  )
}
