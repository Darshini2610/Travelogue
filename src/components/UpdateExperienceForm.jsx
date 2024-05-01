  // // UpdateExperienceForm.jsx
  // import React, { useState, useEffect } from "react";
  // import axios from "axios";
  // import { useNavigate, useParams } from "react-router-dom";

  // const UpdateExperienceForm = () => {
  //   const { id } = useParams();
  //   const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [imageName, setImageName] = useState("");
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     // Fetch the memory details based on the ID
  //     const fetchMemoryDetails = async () => {
  //       try {
  //         const response = await axios.get(`http://localhost:5000/memories/${id}`);
  //         const memory = response.data;

  //         // Set the state with the fetched memory details
  //         setTitle(memory.title);
  //         setDescription(memory.description);
  //         setImageName(memory.imageName);
  //       } catch (error) {
  //         console.error("Error fetching memory details:", error);
  //       }
  //     };

  //     fetchMemoryDetails(); // Call the function when the component mounts
  //   }, [id]); // Include id as a dependency

  //   const handleSubmit = async () => {
  //     try {
  //       const formData = {
  //         title,
  //         description,
  //         imageName,
  //       };

  //       await axios.put(`http://localhost:5001/memories/${id}`, formData, {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       // Memory updated successfully, navigate to the desired page
  //       navigate("/");
  //     } catch (error) {
  //       console.error("Error updating memory:", error);
  //     }
  //   };

  //   return (
  //     <div className="grid place-items-center">
  //       <h1 className="font-Playfair text-4xl mt-14">Update Memory</h1>
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

          

  //         <button
  //           type="button"
  //           className="mt-8 bg-amber-950 text-white py-2 px-4 rounded hover:border-2 hover:border-double"
  //           onClick={handleSubmit}
  //         >
  //           Update Memory
  //         </button>
  //       </form>
  //     </div>
  //   );
  // };

  // export default UpdateExperienceForm;
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import { useNavigate, useParams } from "react-router-dom";
  
  const UpdateExperienceForm = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchMemoryDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/memories/${id}`);
          const memory = response.data;
          setTitle(memory.title);
          setDescription(memory.description);
        } catch (error) {
          console.error("Error fetching memory details:", error);
        }
      };
  
      fetchMemoryDetails();
    }, [id]);
  
    const handleSubmit = async () => {
      try {
        // Send request to update memory
        await axios.put(`http://localhost:5000/memories/${id}`, { title, description });
        
        navigate("/"); // Navigate to home page after successful memory update
      } catch (error) {
        console.error("Error updating memory:", error);
      }
    };
  
    return (
      <div className="grid place-items-center">
        <h1 className="font-Playfair text-4xl mt-14">Update Memory</h1>
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
  
          <button
            type="button"
            className="mt-8 bg-amber-950 text-white py-2 px-4 rounded hover:border-2 hover:border-double"
            onClick={handleSubmit}
          >
            Update Memory
          </button>
        </form>
      </div>
    );
  };
  
  export default UpdateExperienceForm;
  
