import React, { useState } from 'react';

function FileUpload({ onFileSelect }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (file) {
      console.log(file)
      onFileSelect(file);
    } 
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} method="post">
        <input type="file" name = "file" accept=".csv" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      
    </div>
  );
}

export default FileUpload;
