// frontend/src/UploadForm.js
import React, { useState } from 'react';

function UploadForm({ onImageUpload }) {
  const [imageData, setImageData] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageData(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onImageUpload(imageData);
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".jpg,.jpeg,.png" onChange={handleImageChange} />
        <button type="submit">Process Image</button>
      </form>
    </div>
  );
}

export default UploadForm;
