// ExperienceCard.js
import React from "react";
import AmerFort from './AmerFort.jpg'
import CityPalace from './CityPalace.JPG'
import Queens from './Queens.JPG'
import { useNavigate } from "react-router-dom";

const ExperienceCard = () => {

  const cards = [
    {title: 'Jaipur - Amer Fort', description: 'Illuminated by its lights creating a stunning beautiful scene on the perfectly cool night.',
      image: AmerFort},
    {title: 'Jodhpur', description: 'Elegant queens within the magnificent City Palace of Jodhpur.',
      image: Queens},
    {title: 'Jaipur - City Palace', description: 'The beautiful City Palace, a stunning architectural marvel in the Pink City.',
      image: CityPalace},
    {title: 'Jodhpur', description: 'Elegant queens within the magnificent City Palace of Jodhpur.',
      image: Queens},
    {title: 'Jaipur - City Palace', description: 'The beautiful City Palace, a stunning architectural marvel in the Pink City.',
      image: CityPalace},
    {title: 'Jaipur - Amert Fort', description: 'Illuminated by its lights creating a stunning beautiful scene on the perfectly cool night.',
      image: AmerFort}
  ]

  const navigate = useNavigate()
  const navigatetoAdd = () => {
    navigate('/AddCard')
  }

  return (
    <div>
      <h1 className="font-Playfair text-4xl mt-14">Travelogue</h1>
      <button 
        className='font-serif bg-amber-950 px-3 py-1 m-5 mb-10 text-white rounded-lg'
        onClick={navigatetoAdd}
      >Add Memory</button>
      <div className="grid font-sans grid-cols-3 place-items-center">
      {cards.map((card,index) => (
        <div className="mb-10 relative rounded-xl overflow-hidden shadow-md shadow-slate-400 w-4/5 mx-5 group hover:border-double border-4 border-amber-950">
  <div className="text-amber-950 opacity-0 group-hover:opacity-100">
    <button className="absolute left-5 top-5 bg-white rounded-md px-2 border-2 border-amber-950">Edit</button>
    <button className="absolute right-5 top-5 bg-white rounded-md px-2 border-2 border-amber-950">Delete</button>
  </div>
  <img className="w-full h-64 object-cover" src={card.image} alt={card.title} />
  <div className="absolute grid place-items-center bottom-0 left-0 right-0 top-14 bg-gradient-to-t from-amber-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
    <div className="px-6 py-4 h-full overflow-y-auto">
      <div className="font-bold rounded-xl text-4xl mb-2 mt-10 font-Tangerine text-white p-1">{card.title}</div>
      <p className="text-white font-serif mb-2">{card.description}</p>
    </div>
  </div>
</div>

      ))}
    </div>
  </div>
  );
};

export default ExperienceCard;
