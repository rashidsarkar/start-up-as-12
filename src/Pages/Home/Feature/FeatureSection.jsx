import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import "./FeatureSection.css";
import { useQuery } from "@tanstack/react-query";
// import axiosInstance from "../../../AxiosAPI/axiosInstance";
import CustomLoading from "../../../Components/CustomLoading";
import useAxiosInstance from "../../../AxiosAPI/useAxiosInstance";

function FeatureSection({ feature }) {
  const axiosInstance = useAxiosInstance();

  const { date, title, description, image } = feature;
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".carda"), {
      glare: true,
      reverse: true,
      "max-glare": 0.5,
    });
  }, []);

  let cardStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="mx-4 md:mx-0 cards-container">
      <div className="m-2 mx-auto carda lg:m-7 md:m-3 ">
        <div style={cardStyle} className="card-image quiz-image"></div>
        <div className="card-text">
          <span className="date">{date}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
