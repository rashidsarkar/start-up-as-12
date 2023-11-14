import React from "react";

function SectionDividerWithText({ title, description }) {
  return (
    <div className="bg-[#1a2c2e] py-4 w-10/12 mx-auto my-5 rounded-2xl">
      <div className="container mx-auto text-center text-white">
        <h2 className="mb-4 text-4xl font-bold">{title}</h2>
        <p className="mb-8 text-lg">{description}</p>
        <div className="border-b border-[#6440FA] w-1/4 mx-auto"></div>
      </div>
    </div>
  );
}

export default SectionDividerWithText;
