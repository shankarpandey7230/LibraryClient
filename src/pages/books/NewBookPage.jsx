import { NewBookForm } from "@components/forms";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewBookPage = () => {
  return (
    <div className="p-3">
      <div className="p-3"> NewBookPage</div>

      <hr />
      <Link to="/user/books">
        <Button variant="secondary">Back</Button>
      </Link>
      <NewBookForm />
    </div>
  );
};

export default NewBookPage;
