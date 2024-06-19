import { useState } from "react";

const Plan = ({ plan }) => {
  const [activeTab, setActiveTab] = useState("soft");

  function handleClick(type) {
    setActiveTab(type);
  }

  return (
    <div className="b-plans__item b-accordion-item" key={plan.id}>
      <div className="accordion-header" id={`panelsStayOpen-h${plan.id}`}>
        <div
          className="b-plans__item-head accordion-button collapsed"
          data-bs-toggle="collapse"
          aria-expanded="false"
          data-bs-target={`#panelsStayOpen-c${plan.id}`}
          aria-controls={`panelsStayOpen-c${plan.id}`}
        >
          <div className="b-plans__item-info">
            <div className="b-plans__name">{plan.name}</div>
            <div className="b-plans__achieved">
              Освоено&nbsp;
              <span className="b-plans__reached">
                {plan.proficientCount}&nbsp;
              </span>
              из&nbsp;
              <span className="b-plans__achieved-max">
                {plan.competencyCount}&nbsp;
              </span>
              компетенций
            </div>
            <div className="b-plans__item-progress">
              <div className="b-plans__percent">{plan.planProgress + "%"}</div>
              <div className="progress progress--plan">
                <div
                  className="progress-bar"
                  style={{
                    width: plan.planProgress + "%",
                  }}
                  role="progressbar"
                  aria-valuenow={plan.planProgress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-collapse collapse"
          id={`panelsStayOpen-c${plan.id}`}
          aria-labelledby={`panelsStayOpen-h${plan.id}`}
        >
          <div className="b-plans__item-body accordion-body">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  aria-selected="true"
                  id="soft-tab"
                  data-bs-toggle="tab"
                  data-bs-target={`#soft-${plan.id}`}
                  type="button"
                  role="tab"
                  aria-controls="soft"
                  onClick={() => handleClick("soft")}
                >
                  soft
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  aria-selected="true"
                  id="hard-tab"
                  data-bs-toggle="tab"
                  data-bs-target={`#hard-${plan.id}`}
                  type="button"
                  role="tab"
                  aria-controls="hard"
                  onClick={() => handleClick("hard")}
                >
                  hard
                </button>
              </li>
            </ul>
            <div className="b-plan-table">
              <div className="b-plan-table__head">
                <div className="b-plan-table__head-cell b-plan-table__head-cell--name">
                  Название
                </div>
                <div className="b-plan-table__head-cell b-plan-table__head-cell--action">
                  Опции:
                </div>
                <div className="b-plan-table__head-cell b-plan-table__head-cell--progress">
                  Прогресс
                </div>
              </div>
              <div
                className="tab-pane fade show active"
                id={`soft-${plan.id}`}
                role="tabpanel"
                aria-labelledby="soft-tab"
              >
                {activeTab === "soft" &&
                  plan.competency
                    .filter((comp) => comp.type === "soft")
                    .map((comp) => (
                      <div
                        className="b-plan-table__row"
                        data-node="user-competency"
                        key={comp.id}
                      >
                        <div className="b-plan-table__name">
                          <div className="b-plan-table__name-text">
                            {comp.shortname}
                          </div>

                          <div className="b-plan-table__way">
                            {comp.inIpr && (
                              <span
                                style={{
                                  color: "red",
                                }}
                              >
                                ! компетенция в ИПР
                              </span>
                            )}
                          </div>
                        </div>
                        <a
                          className="b-plan-table__action link"
                          href={`/local/educationplan/coursesforcomp/?compId=${comp.id}`}
                        >
                          перейти к курсам
                        </a>
                        <div className="b-plan-table__progress">
                          <div className="b-plan-table__percent">
                            {comp.progress}%
                          </div>
                          <div className="progress progress--plan-table progress--done">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: comp.progress + "%",
                              }}
                              aria-valuenow={comp.progress}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
              <div
                className="tab-pane fade show active"
                id={`hard-${plan.id}`}
                role="tabpanel"
                aria-labelledby="hard-tab"
              >
                {activeTab === "hard" &&
                  plan.competency
                    .filter((comp) => comp.type === "hard")
                    .map((comp) => (
                      <div
                        className="b-plan-table__row"
                        data-node="user-competency"
                        key={comp.id}
                      >
                        <div className="b-plan-table__name">
                          <div className="b-plan-table__name-text">
                            {comp.shortname}
                          </div>

                          <div className="b-plan-table__way">
                            {comp.inIpr && (
                              <span
                                style={{
                                  color: "red",
                                }}
                              >
                                ! компетенция в ИПР
                              </span>
                            )}
                          </div>
                        </div>
                        <a
                          className="b-plan-table__action link"
                          href={`/local/educationplan/coursesforcomp/?compId=${comp.id}`}
                        >
                          перейти к курсам
                        </a>
                        <div className="b-plan-table__progress">
                          <div className="b-plan-table__percent">
                            {comp.progress}%
                          </div>
                          <div className="progress progress--plan-table progress--done">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: comp.progress + "%",
                              }}
                              aria-valuenow={comp.progress}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
