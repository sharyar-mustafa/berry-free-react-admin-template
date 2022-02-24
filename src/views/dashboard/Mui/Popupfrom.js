import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

import { useFormik } from "formik";
import * as Yup from "yup";
import { getDatabase, set, ref, push, onValue, child, get } from '../../../Firebase';



export default function FormDialog() {
  

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            packagePrice: "",
            packageDescription: "",

        },
        onSubmit: async (values) => {
            console.log(values);
            handleClose();
            const db = getDatabase();
            push(ref(db, 'packages'), {
                name: values.name,
                packagePrice: values.packagePrice,
                packageDescription: values.packageDescription,
            });


        }
    });
    const setValues = () => {
        formik.setValues({
            name: '',
            packagePrice: "",
            packageDescription: "",

        });
    };

    return (
        <div>
            <Fab onClick={handleClickOpen}
                sx={{ position: "fixed", bottom: 20, right: 16 }} variant="extended" size="medium" color="primary" aria-label="add">
                <NavigationIcon sx={{ mr: 1 }} />
                ADD PRODUCT
            </Fab>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <form onSubmit={formik.handleSubmit} method="post">
                    <DialogContent>
                        {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText> */}
                    {/* {
                        Array.from(Object.entries(state)).map(([key, value]) => (
                                <h1>{value.name}</h1>
                        ))
                    } */}
                        <TextField
                            // autoFocus
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            margin="dense"
                            id="name"
                            label="Package Name"
                            type="text"
                            fullWidth
                            variant="filled"
                        />
                        <TextField
                            value={formik.values.packagePrice}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoFocus
                            margin="dense"
                            id="packagePrice"
                            label="Package Price"
                            type="number"
                            fullWidth
                            variant="filled"
                        />
                        <TextField
                            value={formik.values.packageDescription}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoFocus
                            margin="dense"
                            id="packageDescription"
                            label="package Description"
                            type="text"
                            fullWidth
                            variant="filled"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type='submit'>Subscribe</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}


// console.log(vaes);