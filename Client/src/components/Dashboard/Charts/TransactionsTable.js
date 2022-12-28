import React from 'react'
import {Table, TableContainer, TableHead, TableRow, TableBody, TableCell, Typography} from '@mui/material'
import {Paper} from '@mui/material'


export default function TransactionsTable() {
  return (
    <TableContainer component={Paper} sx={{width: '98%'}} elevation={3}>
        <Typography variant="h6" sx={{margin: '1em'}}>Transactions</Typography>
        <TableHead>
          <TableRow>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
    </TableContainer>
  )
}
