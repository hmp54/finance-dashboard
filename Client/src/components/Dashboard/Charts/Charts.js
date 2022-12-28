import React from 'react'
import {Box} from "@mui/material"
import DistributionChart from "./DistributionChart"
import MonthlyTotalChart from './MonthlyTotalChart'
import SpendingsChart from './SpendingsChart'

export default function Charts() {
  return (
    <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
        <DistributionChart/>
        <SpendingsChart/>
        <MonthlyTotalChart/>
    </Box>
  )
}
