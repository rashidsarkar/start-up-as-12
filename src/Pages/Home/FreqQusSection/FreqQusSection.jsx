// import "./freqQusSection.css";

import { useState } from "react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
function FreqQusSection() {
  return (
    <div className="my-5">
      <p className="mb-8 font-semibold tracking-wide text-center text-purple-600 uppercase">
        Frequently Asked Questions
      </p>
      <h1 className="mb-5 text-2xl font-semibold text-center text-purple-900 capitalize">
        Assignment Frequency and Questions
      </h1>
      <div className="w-full join join-vertical">
        <div className="border collapse collapse-arrow join-item border-base-300">
          <input
            type="radio"
            name="my-accordion-4"
            id="question1"
            checked="checked"
          />
          <div className="text-xl font-medium cursor-pointer collapse-title">
            How often are assignments given?
          </div>
          <div className="collapse-content">
            <p>
              Assignments are typically given on a weekly basis to assess your
              understanding of the course material.
            </p>
          </div>
        </div>
        <div className="border collapse collapse-arrow join-item border-base-300">
          <input type="radio" name="my-accordion-4" id="question2" />
          <div className="text-xl font-medium cursor-pointer collapse-title">
            What type of questions can I expect in assignments?
          </div>
          <div className="collapse-content">
            <p>
              Assignments may include a variety of question types, such as
              multiple-choice, essay questions, and problem-solving exercises.
            </p>
          </div>
        </div>
        <div className="border collapse collapse-arrow join-item border-base-300">
          <input type="radio" name="my-accordion-4" id="question3" />
          <div className="text-xl font-medium cursor-pointer collapse-title">
            How can I prepare for assignment questions?
          </div>
          <div className="collapse-content">
            <p>
              To prepare for assignment questions, it's important to review your
              course materials, participate in class discussions, and seek
              clarification on any topics you find challenging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreqQusSection;
