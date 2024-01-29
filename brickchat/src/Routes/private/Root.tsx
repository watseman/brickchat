import React from 'react'
import Dashboard from '../../components/dashboard/Dashboard'
import DogImage from '../../components/dashboard/DogImage'
import BRToolbar from '../../components/generic/BRToolbar'

import { Grid } from '@mui/material'
import DashboardLayout from '../../components/layouts/DashboardLayout'


type Props = {}

export default function Root({}: Props) {
  return (
  <DashboardLayout>
   <Dashboard></Dashboard>
  </DashboardLayout>   
     



  )
}