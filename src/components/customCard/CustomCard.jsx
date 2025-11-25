import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import lib1 from "../../assets/img/lib1.jpg";
import { Link } from "react-router-dom";
const CustomCard = ({
  imgUrl = lib1,
  title = "Book Title",
  year = 2020,
  slug = "book-title",
  author = "Shankar",
}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <div className="m-2">
          <Card.Img
            variant="top"
            src={import.meta.env.VITE_BASE_API_URL + imgUrl.slice(6)}
            className="rounded"
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
      </Card>
    </div>
  );
};

export default CustomCard;
