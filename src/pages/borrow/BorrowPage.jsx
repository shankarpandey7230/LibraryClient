import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import BurrowTable from "@components/tables/BurrowTable";

const BorrowPage = () => {
  return (
    <div className="p-3">
      <h3>All Burrowed Books</h3>
      <hr />
      <BurrowTable />
    </div>
  );
};

export default BorrowPage;
