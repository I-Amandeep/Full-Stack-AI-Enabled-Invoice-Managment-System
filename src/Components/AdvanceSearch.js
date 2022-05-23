import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@material-ui/core';


export default function AdvanceSearch(props) {


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
                    <DialogTitle style={{ color: 'white' }}>
                        {"Advance Search"}
                    </DialogTitle>
                    <DialogContentText  style={{ display: 'flex', flexDirection: 'column',justifyContent: 'space-evenly',height:"200px" }}>
                        
                           <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly',width:"100%" }}> 
                            <TextField
                                style={{ backgroundColor: 'white', width: "40%" , borderRadius:'5px'}}
                                label="Document Id" 
                                
                                />
                            <TextField
                                style={{ backgroundColor: 'white', width: "40%" , borderRadius:'5px'}}
                                label="Invoice Id" />

                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly',width:"100%" }}>
                            <TextField
                                style={{ backgroundColor: 'white', width: "40%", borderRadius:'5px' }}
                                label="Customer Number" />

                            <TextField
                                style={{ backgroundColor: 'white', width: "40%", borderRadius:'5px' }}
                                label="Business year" 
                                 />   
                                
                            </div>    
                            
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ backgroundColor: "#2b3e4d" }}>
                    <Button variant="outlined" style={{ color: "white", width: "720px", borderColor: "white" }} onClick={close}>SEARCH</Button>
                    <Button variant="outlined" style={{ color: "white", width: "720px", borderColor: "white" }} onClick={close} >CANCEL</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}