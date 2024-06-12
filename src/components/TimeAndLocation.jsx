import React from "react";

const TimeAndLocation = ({ weather: { formatedLocalTime, name, country } }) => {
  return (
    <div className=" mt-6">
      <div className="flex itmes-center justify-center my-6">
        <p className="text-xl font-extralight text-center">
          {formatedLocalTime}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-3xl font-medium text-center">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
