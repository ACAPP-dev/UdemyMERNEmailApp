import React from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurvey } from "../../actions";
import { PieChart } from "react-minimal-pie-chart";

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div
          key={survey._id}
          id={survey._id}
          className="card blue-grey lighten-1"
        >
          <div className="card-content white-text">
            <span className="card-title">Survey: {survey.title}</span>
            <p>Survey Question: {survey.body}</p>
            <p className="left">
              Last Response On:{" "}
              {survey.lastResponded
                ? new Date(survey.lastResponded).toLocaleDateString()
                : "No Response Yet"}
            </p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <PieChart
              style={{ height: "100px" }}
              id="chart1"
              radius={50}
              data={[
                {
                  title: "Yes",

                  value: survey.yes,
                  color: "lightgreen",
                },
                { title: "No", value: survey.no, color: "red" },
              ]}
              label={({ dataEntry }) => dataEntry.value || null}
            />
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
            <div className="right">
              <button
                onClick={() => this.props.deleteSurvey(survey._id)}
                className="btn red lighten-2 flat"
              >
                Delete Survey
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
  SurveyList
);
