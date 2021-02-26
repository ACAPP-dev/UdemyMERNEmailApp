import React from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurvey } from "../../actions";
import { PieChart } from "react-minimal-pie-chart";

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  compareTitle(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }

  compareDates(a, b) {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  }

  renderSurveys() {
    let orderedSurveys = [];

    if (this.props.sortVar === "title") {
      orderedSurveys = this.props.surveys.sort((survey1, survey2) => {
        return this.compareTitle(
          survey1[this.props.sortVar],
          survey2[this.props.sortVar]
        );
      });
    } else if (this.props.sortVar) {
      orderedSurveys = this.props.surveys.sort((survey1, survey2) => {
        return this.compareDates(
          survey1[this.props.sortVar],
          survey2[this.props.sortVar]
        );
      });
    } else {
      orderedSurveys = this.props.surveys.reverse();
    }
    return orderedSurveys.map((survey) => {
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
