import Stack from "react-bootstrap/Stack";
import { Dashboard } from "../../pages";
import { Link } from "react-router";
import { RxDashboard } from "react-icons/rx";
import { IoBookSharp } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { FaHandsHelping } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
function Sidebar() {
  return (
    <Stack gap={3}>
      <div className="p-2">
        <Link className="nav-link" to="/user">
          <RxDashboard className="m-2" />
          DashBoard
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/books">
          <IoBookSharp className="m-2" />
          Books
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/reviews">
          <IoBookSharp className="m-2" />
          Reviews
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/all">
          <LuUsers className="m-2" />
          All Users
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/borrow-history">
          <FaHandsHelping className="m-2" />
          Borrow History
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/profile">
          <CgProfile className="m-2" />
          Profile
        </Link>
      </div>
    </Stack>
  );
}

export default Sidebar;
