import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Stack gap={3}>
      <div className="p-2">
        <Link className="nav-link" to="/user">
          DashBoard
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/books">
          Book
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/review-page">
          Reviews
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/user-page">
          All Users
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/borrow">
          Borrow History
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/profile-page">
          Profile
        </Link>
      </div>
    </Stack>
  );
};

export default Sidebar;
