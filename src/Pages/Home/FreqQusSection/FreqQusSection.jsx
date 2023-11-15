// import "./freqQusSection.css";

import { useState } from "react";
import SectionTitle from "../../../TextEffectComponents/BannerDecpt/SectionTitle/SectionTitle";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
function FreqQusSection() {
  return (
    <div className="my-5">
      {/* <div>
        <p className="mb-8 font-semibold tracking-wide text-center text-purple-600 uppercase">
          Frequently Asked Questions
        </p>

        <h1 className="mb-5 text-2xl font-semibold text-center text-purple-900 capitalize">
          <b>Section Title Name</b> Frequency and Questions
        </h1>
      </div> */}
      <SectionTitle></SectionTitle>

      <div className="w-full join join-vertical">
        <div className="rounded-bl-none rounded-br-none collapse bg-base-200 collapse-arrow">
          <input type="checkbox" />
          <div className="text-xl font-medium collapse-title">
            Click me to show/hide content
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>

        <div className="rounded-tl-none rounded-tr-none collapse bg-base-200 collapse-arrow">
          <input type="checkbox" />
          <div className="text-xl font-medium collapse-title">
            Click me to show/hide content
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreqQusSection;
