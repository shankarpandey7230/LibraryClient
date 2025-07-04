import React from "react";
import EditBookForm from "../../components/forms/bookForms/EditBookForm";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const EditBookPage = () => {
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
    </div>
  );
};

export default EditBookPage;
