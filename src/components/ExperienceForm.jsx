
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const ExperienceForm = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('description', description);
//       formData.append('image', image);

//       await axios.post("http://localhost:5001/memories", formData);

//       navigate("/");
//     } catch (error) {
//       console.error("Error adding memory:", error);
//     }
//   };

//   return (
//     <div className="grid place-items-center">
//       <h1 className="font-Playfair text-4xl mt-14">Travelogue</h1>
//       <h1 className="font-GV mt-10 text-3xl">Create lasting memories that will be cherished forever!</h1>
//       <form className="max-w-md mx-auto mt-8 p-4 h-full bg-white shadow-md rounded-lg border-2">
//         <label className="block text-gray-700 text-sm font-semibold mb-2 mt-4">
//           Title:
//         </label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-amber-950"
//           required
//         />

//         <label className="block mt-4 text-gray-700 text-sm font-semibold mb-2">
//           Description:
//         </label>
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-amber-950"
//           required
//         />

//         <label className="block mt-4 text-gray-700 text-sm font-semibold mb-2">
//           Image:
//         </label>
//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-amber-950"
//           required
//         />

//         <button
//           type="button"
//           className="mt-8 bg-amber-950 text-white py-2 px-4 rounded hover:border-2 hover:border-double"
//           onClick={handleSubmit}
//         >
//           Add Memory
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ExperienceForm;


// idhar se mutex hota hai
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const ExperienceForm = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('description', description);
//       formData.append('image', image);

//       // Send request to add memory
//       await axios.post("http://localhost:5000/memories", formData);

//       navigate("/"); // Navigate to home page after successful memory addition
//     } catch (error) {
//       console.error("Error adding memory:", error);
//     }
//   };

//   return (
//     <div className="grid place-items-center">
//       <h1 className="font-Playfair text-4xl mt-14">Travelogue</h1>
//       <h1 className="font-GV mt-10 text-3xl">Create lasting memories that will be cherished forever!</h1>
//       <form className="max-w-md mx-auto mt-8 p-4 h-full bg-white shadow-md rounded-lg border-2">
//         <label className="block text-gray-700 text-sm font-semibold mb-2 mt-4">
//           Title:
//         </label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-amber-950"
//           required
//         />

//         <label className="block mt-4 text-gray-700 text-sm font-semibold mb-2">
//           Description:
//         </label>
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-amber-950"
//           required
//         />

//         <label className="block mt-4 text-gray-700 text-sm font-semibold mb-2">
//           Image:
//         </label>
//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-amber-950"
//           required
//         />

//         <button
//           type="button"
//           className="mt-8 bg-amber-950 text-white py-2 px-4 rounded hover:border-2 hover:border-double"
//           onClick={handleSubmit}
//         >
//           Add Memory
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ExperienceForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ExperienceForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [serverTime, setServerTime] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const synchronizeClocks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/clock");
        const serverTimestamp = response.data.timestamp;
        const localTimestamp = Date.now();
        const timeDifference = localTimestamp - serverTimestamp;
        const adjustedTime = new Date(localTimestamp - timeDifference);
        setServerTime(adjustedTime);
      } catch (error) {
        console.error("Error synchronizing clocks:", error);
      }
    };

    synchronizeClocks();
  }, []);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('image', image);

      // Send request to add memory
      await axios.post("http://localhost:5000/memories", formData);

      navigate("/"); // Navigate to home page after successful memory addition
    } catch (error) {
      console.error("Error adding memory:", error);
    }
  };

  return (
    <div className="grid place-items-center">
      <h1 className="font-Playfair text-4xl mt-14">Travelogue</h1>
      <h1 className="font-GV mt-10 text-3xl">Create lasting memories that will be cherished forever!</h1>
      {serverTime && (
        <p className="text-gray-700">Server time: {serverTime.toLocaleString()}</p>
      )}
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
          Image:
        </label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-amber-950"
          required
        />

        <button
          type="button"
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
