import React, {useState} from 'react'
import {Box, InputLabel, NativeSelect, Paper} from '@mui/material'
import DashboardYears from './DashboardYears';
import Charts from './Charts/Charts'
import TransactionsTable from './Charts/TransactionsTable';


export default function Dashboard({open}) {
  return (
    <Paper       
    elevation={3} 
    sx={{width: '100vw', height: '100vh', margin: 0}}
    position='absolute'
    open='open'
    >
      <Box sx={{marginLeft: '2em', marginTop: '5.5em'}}>
        <Box sx={{display:'flex'}}>
          <Box>
            <InputLabel>Year</InputLabel>
            <DashboardYears/>
          </Box>
          <Box>
            <InputLabel>Month</InputLabel>
            <NativeSelect>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </NativeSelect>
          </Box>
        </Box>
        <Box>
          <Charts/>
          <TransactionsTable/>
        </Box>
      </Box>
      </Paper>
  )
}
