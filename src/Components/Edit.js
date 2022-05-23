import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@material-ui/core';


export default function Edit(props) {


    const { open, close } = props

    return (
        <div>
           
            <Dialog
                open={open}
                fullWidth
                
                // aria-labelledby="alert-dialog-title"
                // aria-describedby="alert-dialog-description"
            >


                <DialogContent style={{ backgroundColor: "#2b3e4d" }}>
                    <DialogTitle  style={{ color: 'white' }}>
                        {"Edit"}
                    </DialogTitle>
                    <DialogContentText  style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly',height:"50px",width:"100%"}}>
                            <TextField
                                style={{ backgroundColor: 'white', width: "45%",borderRadius:"5px" }}
                                label="Invoice Currency" 
                                defaultValue="USD"
                                />
                            <TextField
                                style={{ backgroundColor: 'white', width: "45%",borderRadius:"5px" }}
                               label="Customer Payment Terms" 
                                defaultValue="ABCD"
                                />
                                
                            </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ backgroundColor: "#2b3e4d" }}>
                    <Button variant="outlined" style={{ color: "white", width: "720px", borderColor: "white" }} onClick={close}>EDIT</Button>
                    <Button variant="outlined" style={{ color: "white", width: "720px", borderColor: "white" }} onClick={close} >CANCEL</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}