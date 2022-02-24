import React, { useEffect } from 'react';
// import { Card, CardContent, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { styled, useTheme } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import { Avatar, Box, Grid, Menu, MenuItem, Typography } from '@mui/material';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';



export default function CardF({ name , packagePrice, packageDescription }) {
    const theme = useTheme();

    const CardWrapper = styled(MainCard)(({ theme }) => ({
        backgroundColor: theme.palette.secondary.dark,
        color: '#fff',
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: 210,
            height: 210,
            background: theme.palette.secondary[800],
            borderRadius: '50%',
            top: -85,
            right: -95,
            [theme.breakpoints.down('sm')]: {
                top: -105,
                right: -140
            }
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: 210,
            height: 210,
            background: theme.palette.secondary[800],
            borderRadius: '50%',
            top: -125,
            right: -15,
            opacity: 0.5,
            [theme.breakpoints.down('sm')]: {
                top: -155,
                right: -70
            }
        }
    }));
    



    return (
        <CardWrapper sx={{
            mb: 3,
            display: 'flex',
        }

        } border={false} content={false}>
        <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
                <Grid item>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                        </Grid>
                        <Grid item>
                            <Menu
                                id="menu-earning-card"
                                // anchorEl={anchorEl}
                                keepMounted
                                // open={Boolean(anchorEl)}
                                // onClose={handleClose}
                                variant="selectedMenu"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right'
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                            >
                            </Menu>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container alignItems="center">
                        <Grid item>
                            <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                               {name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Avatar
                                sx={{
                                    cursor: 'pointer',
                                    ...theme.typography.smallAvatar,
                                    backgroundColor: theme.palette.secondary[200],
                                    color: theme.palette.secondary.dark
                                }}
                            >
                            </Avatar>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{ mb: 1.25 }}>
                    <Typography
                        sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.secondary[200]
                        }}
                    >
                        {packageDescription}
                    </Typography>
                </Grid>
                <Grid item sx={{ mb: 1.25 }}>
                    <Typography
                        sx={{
                            fontSize: '2rem',
                            fontWeight: 500,
                            color: theme.palette.secondary[200]
                        }}
                    >
                        {packagePrice}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    </CardWrapper>
    )
}
