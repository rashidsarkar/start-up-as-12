import useTestData from "../API/useTestData";
import CustomLoading from "./CustomLoading";

function About() {
  const { testData, isLoading } = useTestData();

  console.log(testData);
  return (
    <div className="min-h-screen">
      <h2>this is about {testData?.length} </h2>
    </div>
  );
}

export default About;
