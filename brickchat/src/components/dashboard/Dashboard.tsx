import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardContent,Container,Typography } from '@mui/material'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useActivityApi } from '../../hooks/useActivity';
import DBActivity from './DBActivity';
import useClippy from 'use-clippy';
import { green } from '@mui/material/colors';

type Props = {}

export default function Dashboard({}: Props) {
  const [clipboard, setClipboard] = useClippy();



  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}> {/* Create a flex container */}

      <DBActivity pdfUrl='https://languageadvisor.net/wp-content/uploads/2022/06/Polish-Verbs-Essentials-of-Grammar-PDFDrive-.pdf'/>
            {/* Large Box Section */}
            <div style={{ width: '600px', height: '100%', backgroundColor: 'lightgrey' }}> {/* Fixed width for the box */}
        {/* Content of the box */}
        <Box className='rounded-3xl ml-2 mt-10 p-10' style={{backgroundColor: 'white'}}>



        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mt-4 mb-2">
  {clipboard}
</h1>


      </Box>
      </div>
  </div>
  )
}