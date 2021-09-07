import React from 'react';
import { Paper } from '@material-ui/core';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';

const AddCompany = (props) => {
    return (
        <Paper elevation={0}>
           <h2>
               <AddToQueueIcon color={'disabled'} />
               Add empresa
           </h2>
        </Paper>
    )
}

export default AddCompany;