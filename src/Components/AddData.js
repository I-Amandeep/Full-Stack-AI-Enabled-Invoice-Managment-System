import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@material-ui/core';
// import { height } from '@mui/system';


export default function AddData(props) {


    const { open, close } = props

    return (
        <div>
           <Dialog
                open={open}
                fullWidth
                maxWidth="xl"
                // aria-labelledby="alert-dialog-title"
                // aria-describedby="alert-dialog-description"
            >


                <DialogContent style={{ backgroundColor: "#2b3e4d" }}>
                    <DialogTitle style={{ color: 'white' }}>
                        {"Add"}
                    </DialogTitle>
                <DialogContentText  style={{ display: 'flex', flexDirection: 'column',height:"350px",justifyContent:"space-evenly" }}>
                        <div style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly'}}>
                            <TextField
                                style={{ backgroundColor: 'white', width: "23%",borderRadius:'5px' }}
                                label="Business Code" />

                                <TextField
                                style={{ backgroundColor: 'white', width: "23%",borderRadius:'5px' }}
                                label="Customer Number" />

                            <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'5px'}}
                                type = "date"
                                InputLabelProps={{shrink:true}}
                                label="Clear Date" />
                                
                            <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'5px'}}
                                label="Business Year" /></div>

                        <div style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly'}}>

                        <TextField
                            style={{ backgroundColor: 'white', width: "23%",borderRadius:'5px',borderRadius:'5px'}}
                            label="Document Id" />

                            <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'6px'}}
                                type = "date"
                                InputLabelProps={{shrink:true}}
                                label="Posting date" />

                                <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'6px'}}
                                type = "date"
                                InputLabelProps={{shrink:true}}
                                label="Document Create date" />

                                <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'5px'}}
                                type = "date"
                                InputLabelProps={{shrink:true}}
                                label="Due Date" />

                                </div>
                        <div style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly' }}>
                            <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'5px'}}
                                label="Invoice Currency" />

                            <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'5px'}}
                                label="Document Type" />

                            <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'5px'}} 
                                label="Posting Id" />
                            <TextField

                                style={{ backgroundColor: 'white', width: "23%",borderRadius:'5px' }}
                                label="Total Open Amount" />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly' }}>
                           <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'5px'}}
                                type = "date"
                                InputLabelProps={{shrink:true}}
                                label="Baseline Create Date" />

                            <TextField
                                style={{ backgroundColor: 'white', width: "23%",borderRadius:'5px' }}
                                label="Customer Payment Terms" />
                                
                            <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'5px'}}
                                  label="Invoice Id" />

                                <div style={{ width: "23%" , opacity:"0"}}>

                                </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ backgroundColor: "#2b3e4d" }}>
                    <Button variant="outlined" style={{ color: "white", width: "720px", borderColor: "white" }} onClick={close}>Add</Button>
                    <Button variant="outlined" style={{ color: "white", width: "720px", borderColor: "white" }} onClick={close} >Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}