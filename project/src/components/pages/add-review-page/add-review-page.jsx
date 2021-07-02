import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { filmPropTypes } from '../../../prop-types/films';

import Logo from '../../logo/logo';
import AddReviewsFrom from '../../add-review-form/add-reviews-form';
import NotFoundPage from '../not-found-page/not-found-page';
import UserBlock from '../../user-block/user-block';

import { APP_ROUTES } from '../../../const';

function AddReviewPage({ currentFilm }) {
  const { id } = useParams();

  if (currentFilm.length > 0) {
    const { name, backgroundImage, posterImage } = currentFilm[0];

    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <Logo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`${APP_ROUTES.FILMS}/${id}`} className="breadcrumbs__link">{name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <UserBlock />
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>
        </div>

        <AddReviewsFrom />
      </section>
    );
  }

  return <NotFoundPage />;
}

AddReviewPage.propTypes = {
  currentFilm: filmPropTypes,
};

export default AddReviewPage;
