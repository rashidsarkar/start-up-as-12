import { useQuery } from "@tanstack/react-query";
import Banar from "./Banar/Banar";
import FeatureSection from "./Feature/FeatureSection";
// import axiosInstance from "../../AxiosAPI/axiosInstance";
import CustomLoading from "../../Components/CustomLoading";
import FreqQusSection from "./FreqQusSection/FreqQusSection";
import SectionDividerWithText from "../../Components/SectionDividerWithText";
import useAxiosInstance from "../../AxiosAPI/useAxiosInstance";

function Home() {
  const axiosInstance = useAxiosInstance();

  const { data, isLoading, error } = useQuery({
    queryFn: async () => {
      const res = await axiosInstance.get("/api/features");
      return res.data;
    },
    queryKey: ["Features"],
  });
  if (error) {
    return error.message;
  }
  if (isLoading) {
    return <CustomLoading></CustomLoading>;
  }

  return (
    <div className="min-h-screen">
      <Banar></Banar>
      <SectionDividerWithText
        title="Featured Section"
        description="Discover our amazing features and services."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {data.map((item) => (
          <FeatureSection feature={item} key={item._id}></FeatureSection>
        ))}
      </div>
      <FreqQusSection></FreqQusSection>
    </div>
  );
}

export default Home;
