import { useState, useEffect } from "react";

import Plan from "/src/shared/components/Plan/Plan.jsx";
import { getUserPlan } from "/src/shared/api/userPlan.js";

const Competenties = () => {
  const [userPlan, setUserPlan] = useState([]);

  useEffect(() => {
    getUserPlan().then((response) => {
      setUserPlan(response);
    });
  }, []);

  return (
    <div>
      <div className="accordion-item" xmlns="http://www.w3.org/1999/html">
        <h2 className="accordion-header" id="panelsStayOpen-h2">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-c2"
            aria-expanded="false"
            aria-controls="panelsStayOpen-c2"
          >
            Мои компетенции
          </button>
        </h2>
        <div
          className="accordion-collapse collapse"
          id="panelsStayOpen-c2"
          aria-labelledby="panelsStayOpen-h2"
        >
          <div className="accordion-body">
            <div className="b-tab">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="plan-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#plan"
                    type="button"
                    role="tab"
                    aria-controls="plan"
                    aria-selected="true"
                  >
                    Мой план
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="plan"
                  role="tabpanel"
                  aria-labelledby="plan-tab"
                >
                  <div className="b-progress">
                    <div className="b-tab b-tab--difficulty">
                      <div className="tab-content" id="myTabContent">
                        {userPlan.map((course, index) => {
                          return (
                            <div className="b-progress__progress" key={index}>
                              <div className="progress progress--summary">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: course.fullProgress + "%" }}
                                ></div>
                              </div>
                              <div className="b-progress__progress-percantage">
                                <div className="b-progress__achieved js-progress-achieved">
                                  <span className="b-progress__achieved-percantage">
                                    {course.fullProgress + "%"}
                                  </span>
                                </div>
                                <div className="b-progress__max">100%</div>
                              </div>
                            </div>
                          );
                        })}
                        <div className="b-progress__table-head">
                          <div className="b-progress__table-cell b-progress__table-cell--name">
                            Название
                          </div>
                          <div className="b-progress__table-cell b-progress__table-cell--action"></div>
                          <div className="b-progress__table-cell b-progress__table-cell--status">
                            Статус
                          </div>
                        </div>
                        <div className="b-plans">
                          {userPlan.length !== 0
                            ? userPlan[0].educationPlans.map((plan) => (
                                <Plan plan={plan} key={plan.id} />
                              ))
                            : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competenties;
