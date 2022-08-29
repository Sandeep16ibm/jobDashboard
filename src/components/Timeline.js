import React from "react";

const Timeline = ({ company, status }) => {
  return (
    <>
      <div className="timeline-container">
        <div className="rightbox">
          <div className="rb-container">
            <ul className="rb">
              <li className="rb-item" ng-repeat="itembx">
                <div className="timestamp">
                  3rd May 2022
                  <br /> 7:00 PM
                </div>
                <div className="item-title">You have applied for this job.</div>
              </li>
              <li className="rb-item" ng-repeat="itembx">
                <div className="timestamp">
                  9th May 2022
                  <br /> 3:00 PM
                </div>
                <div className="item-title">
                  Mia Redwood from {company} seen your resume.
                </div>
              </li>
              <li className="rb-item" ng-repeat="itembx">
                <div className="timestamp">
                  17st May 2022
                  <br /> 7:00 PM
                </div>
                <div className="item-title">
                  {status
                    ? `Your application is under review at ${company}.`
                    : `${company} rejected your application.`}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
