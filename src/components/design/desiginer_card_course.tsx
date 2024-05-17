import React from "react";

const DesignerCard = ({title , desc , link}) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-auto transition hover:bg-purple-100">
      <a href={link} className="block">
        <div className="p-4">
          <p className="font-semibold text-gray-800">{title}</p>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>
        <div className="go-corner absolute top-0 right-0 bg-teal-500 rounded-bl-lg flex items-center justify-center ">
          
        </div>
      </a>
    </div>
  );
};

export default DesignerCard;
