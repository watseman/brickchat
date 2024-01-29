import React from 'react'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

type Props = {}

export default function DBpdf({}: Props) {
  return (
    <div className='w-96'>
        <object className='w-96' data="https://languageadvisor.net/wp-content/uploads/2022/06/Polish-Verbs-Essentials-of-Grammar-PDFDrive-.pdf" type="application/pdf"  height="100%">
           
        </object>
        </div>
  )
}