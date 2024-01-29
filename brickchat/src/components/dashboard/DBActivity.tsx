import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import useClippy from 'use-clippy';

type Props = {
  pdfUrl: string;
}

export default function DBpdf({ pdfUrl }: Props) {
    



  return (
    
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}> {/* Create a flex container */}
      {/* PDF Section */}
      <div style={{ flex: 1, height: '100%' }}> {/* PDF takes up the remaining space */}
    
        <object 
          data={pdfUrl} 
          type="application/pdf"  
          width="100%" 
          height="100%"
        >
          <p>Your browser does not support PDFs. Please download the PDF to view it: <a href={pdfUrl}>Download PDF</a>.</p>
        </object>
      </div>

       
    <Box></Box>
    
    </div>
  )
}
