import { useState } from 'react';
import { uploadImages } from '../../api/imageApi';

const ImageUploader = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleUpload = async () => {
    try {
      const result = await uploadImages(files);
      alert(result);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Images</button>
    </div>
  );
};

export default ImageUploader;