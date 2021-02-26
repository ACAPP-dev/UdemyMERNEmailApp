import React, { useState } from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  const [sortVar, setSort] = useState("");

  const handleSelect = (event) => {
    setSort(event.target.value);
  };

  return (
    <div id="dashboard">
      <div style={{ marginBottom: "2px" }}>
        <label htmlFor="sort">Sort By:</label>
        <select onChange={handleSelect} className="browser-default" id="sort">
          <option value="">None</option>
          <option value="dateSent">Date of Survey</option>
          <option value="lastResponded">Date of Last Response</option>
          <option value="title">Survey Title</option>
        </select>
      </div>
      <div>
        <SurveyList sortVar={sortVar} />
      </div>
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
