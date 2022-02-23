import React, { useEffect } from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { getDatabase, set, ref, push, onValue, child, get } from '../../../Firebase';


export default function CardF() {

    const [state,setState] = React.useState({})

    useEffect(() => {
        const dbRef = ref(getDatabase());
        onValue(child(dbRef, `packages/`), (snapshot) => {
            console.log(snapshot.val());
            snapshot.exists() && setState(snapshot.val())
        })
    }, [])
   


    return (
        
        <Card>
               {
                        Array.from(Object.entries(state)).map(([key, value]) => (
                                <h1>{value.name}</h1>
                        ))
                    }
        <CardContent>
            <Grid container direction="column">
                <Grid item>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Skeleton variant="rectangular" width={44} height={44} />
                        </Grid>
                        <Grid item>
                            <Skeleton variant="rectangular" width={34} height={34} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Skeleton variant="rectangular" sx={{ my: 2 }} height={40} />
                </Grid>
                <Grid item>
                    <Skeleton variant="rectangular" height={30} />
                 
                    
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    )
}
