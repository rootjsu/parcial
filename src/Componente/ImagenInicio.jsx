import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const ImagenInicio = () => {
  return (
    <div>
      <Carousel>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/05/08/19/35/cyber-security-2296269_1280.jpg"
          alt="First slide"
        />
       
      </Carousel>
    </div>
  );
};
