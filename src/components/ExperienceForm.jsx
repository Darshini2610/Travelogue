// ExperienceForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExperienceForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/')    
  };


  return (
    <div className="grid place-items-center">
      <h1 className="font-Playfair text-4xl mt-14">Travelogue</h1>
      <h1 className="font-GV mt-10 text-3xl">Create lasting memories that will be cherished forever!</h1>
    <form className="max-w-md mx-auto mt-8 p-4 h-full bg-white shadow-md rounded-lg border-2">
      <label className="block text-gray-700 text-sm font-semibold mb-2 mt-4">
        Title:
      </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-amber-950"
        required
      />

      <label className="block mt-4 text-gray-700 text-sm font-semibold mb-2">
        Description:
      </label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-amber-950"
        required
      />

      <label className="block mt-4 text-gray-700 text-sm font-semibold mb-2">
        Upload Image:
      </label>
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-amber-950"
      />

      <button
        type="submit"
        className="mt-8 bg-amber-950 text-white py-2 px-4 rounded hover:border-2 hover:border-double"
        onClick={handleSubmit}
      >
        Add Memory
      </button>
    </form>
    </div>
  );
};

export default ExperienceForm;
