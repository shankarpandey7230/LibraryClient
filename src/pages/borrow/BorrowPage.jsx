import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import BurrowTable from "@components/tables/BurrowTable";

const BorrowPage = ({ isAdmin }) => {
  return (
    <div className="p-3">
      <h3>{isAdmin ? "All Burrowed Books" : "My Burrowed List"}</h3>
      <hr />
      <BurrowTable isAdmin={isAdmin} />
    </div>
  );
};

export default BorrowPage;
