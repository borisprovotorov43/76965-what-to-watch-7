import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { filmPropTypes } from '../../prop-types/film';
import { REVIEWS } from '../../mocks/reviews';
import cx from 'classnames';

import { TAB_DEFAULT, TABS_LIST } from '../../const';
import TabOverview from '../tab-overview/tab-overview';
import TabDetails from '../tab-details/tab-details';
import TabReviews from '../tab-reviews/tab-reviews';

function Tabs({ film }) {
  const [activeTab, setActiveTab] = useState(TAB_DEFAULT);
  const [ tabOverview, tabDetails, tabReviews] = TABS_LIST;
  const [ currentFilm ] = film;

  const handleActiveTabSet = (evt, tabName) => {
    evt.preventDefault();
    setActiveTab(tabName);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {TABS_LIST.map((tabName) => (
            <li
              className={cx('film-nav__item', { 'film-nav__item--active': activeTab === tabName })}
              key={`tab-item-${tabName}`}
            >
              <a
                className="film-nav__link"
                href="#/"
                onClick={(evt) => handleActiveTabSet(evt, tabName)}
              >
                {tabName}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {activeTab === tabOverview && <TabOverview film={currentFilm} />}
      {activeTab === tabDetails && <TabDetails film={currentFilm} />}
      {activeTab === tabReviews && <TabReviews film={currentFilm} reviews={REVIEWS} />}

    </div>
  );
}

const { arrayOf } = PropTypes;

Tabs.propTypes = {
  film: arrayOf(filmPropTypes),
};

export default Tabs;
