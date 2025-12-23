import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import lib1 from "../../assets/img/lib1.jpg";
import { Link } from "react-router-dom";
export const CustomCard = ({
  imgUrl = lib1,
  title = "Book Title",
  year = 2020,
  slug = "book-title",
  author = "Shankar",
}) => {
  return (
    <Card>
      <div>
        <div className="m-2 d-flex justify-content-center align-items-center">
          <Card.Img
            variant="top"
            src={import.meta.env.VITE_BASE_API_URL + imgUrl.slice(6)}
            className="rounded "
            style={{ width: "250px", height: "200px" }}
          />
        </div>

        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {author}-{year}
          </Card.Text>
          <Link to={"/books/" + slug}>
            <Button variant="dark">View Details</Button>
          </Link>
        </Card.Body>
      </div>
    </Card>
  );
};

// export const CustomCardList = ({
//   imgUrl = lib1,
//   title = "Book Title",
//   year = 2020,
//   slug = "book-title",
//   author = "Shankar",
// }) => {
//   return (
//     <Card style={{ " width": "18rem" }}>
//       <div className="d-flex gap-5 ">
//         <div className="m-2  ">
//           <Card.Img
//             variant="top"
//             src={import.meta.env.VITE_BASE_API_URL + imgUrl.slice(6)}
//             className="rounded "
//             style={{ width: "400px", height: "600px" }}
//           />
//         </div>

//         <Card.Body className="text-center">
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>
//             {author}-{year}
//           </Card.Text>
//           <Link to={"/books/" + slug}>
//             <Button variant="dark">View Details</Button>
//           </Link>
//         </Card.Body>
//       </div>
//     </Card>
//   );
// };
export const CustomCardList = ({
  imgUrl = lib1,
  title = "Book Title",
  year = 2020,
  slug = "book-title",
  author = "Shankar",
  description,
}) => {
  return (
    <div className="my-3 mx-2 p-3 shadow-sm border-0" style={{ width: "100%" }}>
      <div className="d-flex gap-5 align-items-start">
        {/* Image Section */}
        <div className="">
          <Card.Img
            variant="top"
            src={import.meta.env.VITE_BASE_API_URL + imgUrl.slice(6)}
            className="rounded"
            style={{ width: "350px", height: "200px", objectFit: "cover" }}
          />
        </div>

        {/* Content Section */}
        <Card.Body className="">
          <div>
            <Card.Title className="">{title}</Card.Title>
            <Card.Text className="text-muted mb-4">
              {author} — {year}
            </Card.Text>
            <Card.Text>{description.slice(0, 200)}...</Card.Text>
          </div>

          <Link to={"/books/" + slug}>
            <Button variant="dark">View Details</Button>
          </Link>
        </Card.Body>
      </div>
    </div>
  );
};
