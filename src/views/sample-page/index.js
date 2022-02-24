// material-ui
import React from 'react';
import { getDatabase, set, ref, push, onValue, child, get } from '../../..//src//Firebase';

   
import { Typography } from '@mui/material';

import  Popupfrom from "../dashboard//Mui//Popupfrom";
import  CardF from "../dashboard//Mui//Card";
import { Grid, } from '@mui/material';
import { useEffect, useState } from 'react';



// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================||  ||============================== //

const SamplePage = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const [state, setState] = React.useState({})

    useEffect(() => {
        const dbRef = ref(getDatabase());
        onValue(child(dbRef, `packages/`), (snapshot) => {
            console.log(snapshot.val());
            snapshot.exists() && setState(snapshot.val())
        })
    }, [])

    
    return (
    <MainCard title="Sample Card">
            <Grid container spacing={3}>
                    
                    {
                        Array.from(Object.entries(state)).map(([key, value]) => (
                            <Grid item xs={12} md={4}>  < CardF key={key} name={value.name} packagePrice={value.packagePrice} packageDescription={value.packageDescription} /></Grid>
                        ))
                    }
                
            </Grid>
      <Popupfrom />
    </MainCard>
    )};

export default SamplePage;
