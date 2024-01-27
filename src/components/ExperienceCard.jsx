// ExperienceCard.js
import React from "react";

const ExperienceCard = ({ experience }) => {
  const { title, description, image } = experience;

  return (
    <div className="flex font-sans">
      <div className="flex-none w-56 relative">
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto font-medium text-slate-900">{title}</h1>

          <div className="text-sm font-medium text-slate-400">
            <p>{description}</p>
          </div>
        </div>
        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
          <div className="space-x-2 flex text-sm font-bold"></div>
        </div>
      </form>
    </div>
  );
};

export default ExperienceCard;
