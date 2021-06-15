import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../logo/logo';
import AddReviewsFrom from '../../add-review-form/add-reviews-form';
import NotFoundPage from '../not-found-page/not-found-page';
import UserBlock from '../../user-block/user-block';

import { AppRoute } from '../../../const';
import PropTypes from 'prop-types';

function AddReviewPage({ film, params }) {

  if(film) {
    const { id } = params;
    const { title, background, poster } = film[0];

    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={background} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <Logo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`${AppRoute.FILMS}/${id}`} className="breadcrumbs__link">{title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <UserBlock />
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={poster} alt={title} width="218" height="327" />
          </div>
        </div>

        <AddReviewsFrom />
      </section>
    );
  } else {
    return <NotFoundPage />;
  }
}

const { string, number, any, arrayOf, shape } = PropTypes;

AddReviewPage.propTypes = {
  params: any.isRequired,
  film: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      background: string.isRequired,
      poster: string.isRequired,
    }).isRequired,
  ),
};

export default AddReviewPage;
