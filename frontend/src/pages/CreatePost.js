import React, { useState } from 'react';

const CreatePost = () => {
  const [picture, setPicture] = useState(null);
  const [caption, setCaption] = useState('');

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setPicture(file);

    // For previewing the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ picture, caption });
    setPicture(null);
    setCaption('');
    setPreview(null);
  };

  const [preview, setPreview] = useState(null);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="pictureInput" className="block font-medium mb-2">
            Choose a Picture:
          </label>
          <input
            type="file"
            id="pictureInput"
            accept="image/*"
            onChange={handlePictureChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />
        </div>
        {preview && (
          <div className="m-auto w-2/5">
            <img
              src={preview}
              alt="Preview"
              className="max-w-full h-auto bg-cover rounded mb-2"
            />
          </div>
        )}
        <div className="mb-4">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Caption
          </label>
          <input
            type="text"
            id="captionInput"
            value={caption}
            onChange={handleCaptionChange}
            placeholder='write your caption'
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
