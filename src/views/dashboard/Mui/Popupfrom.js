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



export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                    <TextField
                        // autoFocus
                        margin="dense"
                        id="name"
                        label="Package Name"
                        type="email"
                        fullWidth
                        variant="filled"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Package Price"
                        type="number"
                        fullWidth
                        variant="filled"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="package Description"
                        type="email"
                        fullWidth
                        variant="filled"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
