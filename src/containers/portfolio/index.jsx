import React, { useState } from 'react';
import { BsBriefcaseFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { portfolioData, filterData } from './utils';
import './styles.scss';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPortfolio = portfolioData.filter(item => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Professional' && item.name === 'Professional') return true;
    if (activeFilter === 'Social' && item.name === 'LinkedIn') return true;
    if (activeFilter === 'Miscellaneous' && item.name === 'Hobbies') return true;
    return false;
  });

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsBriefcaseFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map(item => (
            <li
              key={item.filterId}
              className={activeFilter === item.label ? 'active' : ''}
              onClick={() => setActiveFilter(item.label)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredPortfolio.map(item => (
            <div className="portfolio__content__cards__item" key={item.id}>
              <div className="portfolio__content__cards__item__img-wrapper">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="portfolio__content__cards__item__info">
                <h3>{item.name}</h3>
                {item.name === 'Resume' && (
                  <a href="/path/to/resume.pdf" download>
                    Download Resume
                  </a>
                )}
                {item.name === 'Professional' && (
                  <a href="/path/to/certificates" target="_blank" rel="noopener noreferrer">
                    View Certifications
                  </a>
                )}
                {item.name === 'LinkedIn' && (
                  <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    Visit LinkedIn Profile
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

