import React, { useEffect } from "react";
import gsap from "gsap";
import Textify from "textify.js";

function BannerDecpt() {
  useEffect(() => {
    // Use Textify.js to animate text
    new Textify(
      {
        el: ".large-animation-3",
        splitType: "lines",
        largeText: true,
        animation: {
          by: "lines",
          stagger: 0.1,
          duration: 0.7,
          ease: "expo.inOut",
          transformOrigin: "left top",
          animateProps: { y: "0", opacity: 0 },
        },
      },
      gsap
    );
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <p className="py-6 large-animation-3">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
    </>
  );
}

export default BannerDecpt;
