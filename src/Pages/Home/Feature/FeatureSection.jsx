import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import VanillaTilt from "vanilla-tilt";
import "./FeatureSection.css";
import CustomLoading from "../../../Components/CustomLoading";

function FeatureSection({ feature }) {
  const { date, title, description, image } = feature || {};

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".carda"), {
      glare: true,
      reverse: true,
      "max-glare": 0.5,
    });
  }, []);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".cardaaa"), {
      glare: true,
      reverse: true,
      "max-glare": 0.5,
    });
  }, []);

  return (
    <>
      {/* <div className="mx-4 md:mx-0 cards-container">
        <div className="m-2 mx-auto carda lg:m-7 md:m-3 ">
          <div style={cardStyle} className="card-image quiz-image"></div>
          <div className="card-text">
            <span className="date">{`this is date`}</span>
            <h2>{`this is title`}</h2>
            <p>{`this is description this is description this is description this is description this is description this is description  `}</p>
            <button className="btn btn-primary">Test</button>
          </div>
        </div>
      </div> */}
      <div className="shadow-xl card cardaaa bg-base-100">
        <figure>
          <LazyLoadImage
            effect="blur"
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: "1s" },
            }}
            src="https://i.ibb.co/0fdj1Mh/pexels-photo-110473.webp"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureSection;
