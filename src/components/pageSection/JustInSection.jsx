import SectionTitle from "@components/sectionTitle/SectionTitle";
import React from "react";
import CustomCard from "../customCard/CustomCard";
import { useSelector } from "react-redux";

const JustInSection = () => {
  const { publicBooks } = useSelector((state) => state.bookInfo);
  console.log(publicBooks);
  let books = [];
  if (publicBooks?.length) {
    const sorted = [...publicBooks].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    books = sorted.slice(0, 4);
  }
  console.log(books);
  return (
    <div className=" just-in-wrapper">
      <SectionTitle title="Just In" />
      <div className="d-flex gap-2 justify-content-center flex-wrap ">
        {books.map((book) => (
          <CustomCard key={book._id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default JustInSection;
