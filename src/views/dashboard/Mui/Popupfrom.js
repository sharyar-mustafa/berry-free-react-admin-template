import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

import { useFormik } from "formik";
import * as Yup from "yup";




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
          name:'',  
          PakagePrice: "",
          packageDescription: "",
   
        },
        onSubmit: async (values) => {
          console.log("23q343 run ");
          let obj = {
            name:values.name,
            PakagePrice: values.PakagePrice,
            packageDescription: values.packageDescription,
          };
          const config = {
            method: "post",
            url: "/leads",
            withCredentials: true,
            data: obj,
          };
          await axios(config)
            .then((res) => {
              if (res.data.message === "Data Create Sucessfully") {
                setMSG("Lead Created Sucessfully");
                setTimeout(() => {
                  setValues();
                  //   setLoading(false);
                  onClose();
                }, 1000);
              } else {
                setError(true);
                setMSG(res.data.message);
                setLoading(false);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        },
      });
      const setValues = () => {
        formik.setValues({
          name:'',
          PakagePrice: "",
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
                <DialogContent>
                    {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText> */}
                    <form onSubmit={formik.handleSubmit} method="post">
                    <TextField
                        // autoFocus
                        value={formik.values.name}
                        margin="dense"
                        id="name"
                        label="Package Name"
                        type="email"
                        fullWidth
                        variant="filled"
                    />
                    <TextField
                      value={formik.values.PakagePrice}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Package Price"
                        type="number"
                        fullWidth
                        variant="filled"
                    />
                    <TextField
                      value={formik.values.packageDescription}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="package Description"
                        type="email"
                        fullWidth
                        variant="filled"
                    />
                     </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
