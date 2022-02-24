import { useEffect, useState } from 'react';
import { getDatabase, set, ref, push, onValue, child, get } from '../../../Firebase';
import React from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import Popupfrom from '../Mui/Popupfrom';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import CardF from '../Mui/Card';
import Table from '../Mui/Table';


// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
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
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{
                marginTop: '1rem'
            }} >
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={12} md={12} sm={12} xs={12}> 
                    
                   <Table/>
                   </Grid>
                    
                </Grid>
                {/* <Popupfrom /> */}
                {/* <Fab
                //  onClick={handleClickOpen}
                sx={{ position: "fixed", bottom: 20, right: 16 }} variant="extended" size="medium" color="primary" aria-label="add">
                <NavigationIcon sx={{ mr: 1 }} />
                ADD PRODUCT
            </Fab> */}
            </Grid>
        </Grid>
    );
};

export default Dashboard;
