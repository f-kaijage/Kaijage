import React from "react";
import { BsStars } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import "./styles.scss"; // Ensure styles are imported

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsStars size={50} />}
      />

      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <h3 className="skills__content-wrapper__inner-content__category-text">
              {item.label}
            </h3>
            <div>
              {item.data.map((skillsItem, j) => (
                <div key={j} className="progressbar-wrapper">
                  <p>{skillsItem.skillname}</p>
                  <div className="progress-bar-wrapper">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${skillsItem.percentage}%`,
                        animationDelay: `${j * 0.3}s`, // Staggered delay
                      }}
                    />
                    <span className="percentage">{skillsItem.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

