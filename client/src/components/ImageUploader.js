import React, { useRef, useState } from 'react';
import { globalStyles } from '../styles/globalStyles';

export default function ImageUploader({ label, onImageSelected }) {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Create a preview URL for immediate display
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);

    // Pass preview URL back to parent
    onImageSelected(previewUrl);

    // If you want permanent storage, upload to backend here:
    // const formData = new FormData();
    // formData.append('image', file);
    // const response = await fetch('https://your-backend.com/upload', {
    //   method: 'POST',
    //   body: formData,
    // });
    // const data = await response.json();
    // onImageSelected(data.url); // backend returns full URL
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <label style={globalStyles.label}>{label}</label>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={globalStyles.input}
        onChange={handleFileChange}
      />

      {preview && (
        <img
          src={preview}
          alt={`${label} preview`}
          style={{
            marginTop: '10px',
            width: '180px',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '8px',
            border: '2px solid #ccc'
          }}
        />
      )}
    </div>
  );
}
