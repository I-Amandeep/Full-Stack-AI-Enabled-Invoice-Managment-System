import './App.css';
import React from "react";
import DataTable from './Components/DataTable';
import Header from './Components/Header';
import { Button, ButtonGroup } from '@mui/material';
import RefreshIcon from '@material-ui/icons/Refresh';
import Footer from './Components/Footer';
import {useState } from 'react';
import AddData from './Components/AddData'
import Edit from './Components/Edit'
import Delete from './Components/Delete'
import AdvanceSearch from './Components/AdvanceSearch';

const Style = {
  color: 'white',
  borderRadius: 10,
  height: "40px",
  backgroundColor: "#2c4350"
}



function App() {


  const [openadd, setOpenadd] = useState(false);

  const handleAddOpen = () => {
    setOpenadd(true);
  };

  const handleAddClose = () => {
    setOpenadd(false);
  };
  const [openedit, setOpenedit] = useState(false);

  const handleEditOpen = () => {
    setOpenedit(true);
  };

  const handleEditClose = () => {
    setOpenedit(false);
  };
  const [opendelete, setOpendelete] = useState(false);

  const handleDeleteOpen = () => {
    setOpendelete(true);
  };

  const handleDeleteClose = () => {
    setOpendelete(false);
  };
  const [openAdavnceSearch, setOpenAdvanceSearch] = useState(false);

  const handleAdvanceSearchOpen = () => {
    setOpenAdvanceSearch(true);
  };

  const handleAdvanceSearchClose = () => {
    setOpenAdvanceSearch(false);
  };

    

  return (
    <div className="App">
      
        <Header />
             <div>
        <h2 style={{ textAlign: "left", marginLeft: 10, marginBottom: 10, color: 'white' }}>Invoice List</h2>
        <div className='btn-group' style={{ marginLeft: 10}}>
          <ButtonGroup style={{
            color: 'white',
            borderRadius: 10,
            height: "40px",
            backgroundColor: "#2c4350"
          }} variant="outlined" aria-label="outlined button group">
            <Button style={{ background: "#87CEEB", width:"220px",color:'white' }}>PREDICT</Button>
            <Button style={{width:"220px" ,color:'white' }}>ANALYTICS VIEW</Button>
            <Button style={{width:"220px",color:'white' }} onClick={handleAdvanceSearchOpen}>ADVANCE SEARCH</Button>
          </ButtonGroup>

          <Button style={{
            borderRadius: 5,
            height: "20px",
            backgroundColor: "#2c4350",
            padding: "18px 18px 18px 10px",
            margin:"0px 5px"
          }} variant="outlined" endIcon={<RefreshIcon />}></Button>

          <input style={{margin:"0px 20px 0px 5px"}} type="text" id="search-bar" placeholder='Search Custumer Id'/>

          <ButtonGroup style={Style}  variant="outlined" aria-label="outlined button group">
            <Button style={{width:"200px",color:'white' }} onClick={handleAddOpen}>ADD</Button>
            <Button style={{width:"200px", borderColor:"black" , margin:"0px 5px",color:'white' }} onClick={handleEditOpen}>EDIT</Button>
            <Button style={{width:"200px",color:'white' ,color:'white' }} onClick={handleDeleteOpen}>DELETE</Button>
          </ButtonGroup>
          
        </div>
          <AddData open={openadd} close={()=>handleAddClose()} />
          <Edit   open={openedit} close={()=>handleEditClose()} />
          <Delete open={opendelete} close={()=>handleDeleteClose()} />
          <AdvanceSearch open={openAdavnceSearch} close={()=>handleAdvanceSearchClose()} />
      <br />
      <DataTable />

      </div>
      <Footer />
    </div>
  );
}

export default App;
