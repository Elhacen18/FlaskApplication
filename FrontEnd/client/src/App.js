import React, { useState } from 'react';
import './App.css';
import FileUpload from './component/FileUpload';
import UploadStatus from './component/UploadStatus';

function App() {
  const [status, setStatus] = useState('');

  const handleFileSelect = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/uploadFile', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(`File uploaded successfully: ${data.filename}`);
      } 
      if(!response.ok) {
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };
  
  return (
    <div className="App">
      <h1>CSV File Upload</h1>
      
      <FileUpload className ="FileLoad" onFileSelect={handleFileSelect} /> 
      <UploadStatus className="FileStatus"status={status} />
    </div>
  );
}

export default App;
