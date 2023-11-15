import React from "react";
import { Zoom } from "react-reveal";

function SectionTitle() {
  return (
    <div className="section-title">
      <Zoom>
        <p className="mb-8 font-semibold tracking-wide text-center text-purple-600 uppercase">
          Frequently Asked Questions
        </p>
      </Zoom>

      <Zoom>
        <h1 className="mb-5 text-2xl font-semibold text-center text-purple-900 capitalize">
          <span className="">
            <Zoom>
              <span>Frequency and Questions</span>
            </Zoom>
          </span>
        </h1>
      </Zoom>
    </div>
  );
}

export default SectionTitle;
