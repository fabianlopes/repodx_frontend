import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function PDFViewer({ pdfUrl }) {
  return (
    <div style={{ height: '500px' }}>
      <Worker>
        <Viewer fileUrl={pdfUrl} />
      </Worker>
    </div>
  );
}

export default PDFViewer;