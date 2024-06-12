
import React from 'react';
import './Loader.css'; 

const Loader = () => {
  return (
    <div className="loader flex justify-center items-center m-auto bg-gray-200  w-32 h-1 rounded-full">
      <div className="loader-inner bg-blue-600 top-0 left-0 w-0 h-full rounded-full"></div>
    </div>
  );
};

export default Loader;
