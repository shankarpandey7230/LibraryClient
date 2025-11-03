import CustomCard from "@components/customCard/CustomCard";
import SectionTitle from "@components/sectionTitle/SectionTitle";
import React from "react";

const Recommendation = () => {
  return (
    <div className="just-in-wrapper">
      <SectionTitle title="Recommendation" />
      <div className="d-flex gap-2 justify-content-center flex-wrap ">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
};

export default Recommendation;
