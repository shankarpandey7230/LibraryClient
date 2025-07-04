import React from "react";
import EditBookForm from "../../components/forms/bookForms/EditBookForm";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { deleteBookAPI } from "@features/books/bookAPI";

const EditBookPage = () => {
  const navigate = useNavigate();
  const { _id } = useParams();

  // console.log(_id);
  const handleOnDelete = async () => {
    if (confirm("Are you sure you want to Delete this book?")) {
      const result = await deleteBookAPI(_id);
      result.status === "success" && navigate("/user/books");
    }
  };
  return (
    <div className="p-3">
      <h3>Edit Book</h3>
      <hr />
      <Link to="/user/books">
        <Button variant="secondary">Back</Button>
      </Link>
      <div>
        <EditBookForm />
      </div>
      <div className="d-grid p-4">
        <Button variant="danger" onClick={handleOnDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default EditBookPage;
