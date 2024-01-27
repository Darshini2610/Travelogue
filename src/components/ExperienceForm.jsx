// ExperienceForm.js
import React, { useState } from "react";

const ExperienceForm = ({ onAddExperience }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <form className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg border-2">
      <label className="block text-gray-700 text-sm font-semibold mb-2">
        Title:
      </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
        required
      />

      <label className="block mt-4 text-gray-700 text-sm font-semibold mb-2">
        Description:
      </label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
        required
      />

      <label className="block mt-4 text-gray-700 text-sm font-semibold mb-2">
        Upload Image:
      </label>
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
      />

      <button
        type="submit"
        className="mt-4 bg-teal-500 text-white py-2 px-4 rounded"
      >
        Add Experience
      </button>
    </form>
  );
};

export default ExperienceForm;
