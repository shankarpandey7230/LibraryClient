import React from "react";
import Star from "@components/star/Star";
import { formatDistanceToNow, subDays } from "date-fns";

const reviews = [
  {
    title: "Awesome Book",
    rating: 4.5,
    details:
      "jskldaghlkasdghklasdjglkasd kljgsadljglksadjg gdjlksjglaskdjglkasdjglkasd",
    reviewedBy: "Shankar Pandey",

    createdAt: "2025-02-20",
  },
  {
    title: "Awesome Book",
    rating: 4.5,
    details:
      "jskldaghlkasdghklasdjglkasd kljgsadljglksadjg gdjlksjglaskdjglkasdjglkasd",
    reviewedBy: "Shankar Pandey",

    createdAt: "2020-02-20",
  },
  {
    title: "Awesome Book",
    rating: 4.5,
    details:
      "jskldaghlkasdghklasdjglkasd kljgsadljglksadjg gdjlksjglaskdjglkasdjglkasd klxcznbvlkxzjbklzx klxbhklzxjbv zxlkgj sdgflksa dfls adlkfjsadkhfkalsdhglkasdhgklasdgj asldkgjhsadkghlasdkghlaskdghaskdlg lksdgjhklsdghlkashdgklsadglaslkd",
    reviewedBy: "Shankar Pandey",

    createdAt: "2020-02-20",
  },
  {
    title: "Awesome Book",
    rating: 4.5,
    details:
      "jskldaghlkasdghklasdjglkasd kljgsadljglksadjg gdjlksjglaskdjglkasdjglkasd hisaklghsadhlglsadghjlsaghldsaghalks higsdaklhgashgklasdg klhgsdlkhaglkasd. ;lsjdgklashdgklsadhgklsad galkshdgklsadhglkhsad",
    reviewedBy: "Shankar Pandey",

    createdAt: "2020-02-20",
  },
];
const Reviews = ({}) => {
  return (
    <div className="reviews-tab">
      {reviews.map((r, i) => (
        <div
          className=" border rounded shadow-lg d-flex gap-5 review-item p-3 mb-5"
          key={i}
        >
          <div className="left d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center fs-2 fw-bold">
              SP
            </div>
          </div>
          <div className="right text-start">
            <h3>{r.title}</h3>
            <div className="d-flex gap-3">
              <Star avgRating={r.rating} />
              <span>
                {formatDistanceToNow(new Date(r.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>

            <p>{r.details}</p>
            <div className="text-end"> - {r.reviewedBy}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
