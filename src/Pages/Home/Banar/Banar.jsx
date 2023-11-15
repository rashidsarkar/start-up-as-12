import { TypeAnimation } from "react-type-animation";
import BannerDecpt from "../../../TextEffectComponents/BannerDecpti/BannerDecpt";
function Banar() {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/B2xHjNq/pexels-vitali-adutskevich-14073070.jpg"
          className="rounded-lg shadow-2xl lg:max-w-lg"
        />
        <div>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Box Office News!",
              1000,
              "Box Office Update!",
              1000,
              "Box Office Dinner!",
              1000,
              "Box Office Hottet!",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "3rem", fontWeight: "700" }}
            repeat={Infinity}
          />
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          {/* <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
          <BannerDecpt></BannerDecpt>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Banar;
