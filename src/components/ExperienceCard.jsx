
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const ExperienceCard = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.131.168:5000/memories");
      setCards(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigateToAdd = () => {
    navigate('/AddCard');
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.131.168:5000/memories/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting memory:", error);
    }
  };

  const navigateToUpdate = (id) => {
    navigate(`/UpdateCard/${id}`);
  };

  return (
    <div>
      <h1 className="font-Playfair text-4xl mt-14">Travelogue</h1>
      <button
        className='font-serif bg-amber-950 px-3 py-1 m-5 mb-10 text-white rounded-lg'
        onClick={navigateToAdd}
      >Add Memory</button>
      <div className="grid font-sans grid-cols-3 place-items-center">
        {cards.map((card, index) => (
          <div key={index} className="mb-10 relative rounded-xl overflow-hidden shadow-md shadow-slate-400 w-4/5 mx-5 group hover:border-double border-4 border-amber-950">
            <img className="w-full h-64 object-cover" src={card.image} alt={card.title} />
            <div className="absolute grid place-items-center bottom-0 left-0 right-0 top-14 bg-gradient-to-t from-amber-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
              <div className="px-6 py-4 h-full overflow-y-auto">
                <div className="font-bold rounded-xl text-4xl mb-2 mt-10 font-Tangerine text-white p-1">{card.title}</div>
                <p className="text-white font-serif mb-2">{card.description}</p>
                <div className="flex justify-between">
                  <button className="bg-white text-amber-950 border-2 border-amber-950 px-2 py-1 rounded-md" onClick={() => handleDelete(card._id)}>Delete</button>
                  <Link to={`/UpdateCard/${card._id}`}>
                    <button className="bg-white text-amber-950 border-2 border-amber-950 px-2 py-1 rounded-md">Update</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
