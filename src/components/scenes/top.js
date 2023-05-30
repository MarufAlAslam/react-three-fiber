import React from "react";

const Top = ({ data, setSelectedData }) => {
    const handleButtonClicked = (id) => {
        setSelectedData(id)
        
    }
  return (
    <div className="pl-7">
      {data.map((item, index) => (
        <div key={index}>
          <button className="flex justify-start items-center text-white mb-2" onClick={()=>handleButtonClicked(item.id)}>
            {item.icon}
            {item.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Top;
