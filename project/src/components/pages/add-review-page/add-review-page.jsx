import React, { useEffect } from 'react';
import { func, number, shape, string } from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCurrentFilm } from '../../../store/api-actions';
import { AppRoutes } from '../../../const';

import Logo from '../../logo/logo';
import AddReviewsFrom from '../../add-review-form/add-reviews-form';
import UserBlock from '../../user-block/user-block';
import NotFoundPage from '../not-found-page/not-found-page';

function AddReviewPage({ currentFilm, onFetchCurrentFilm }) {
  const { id } = useParams();

  useEffect(() => {
    onFetchCurrentFilm(id);
  }, [id, onFetchCurrentFilm]);

  if (currentFilm) {
    const { name, backgroundImage, posterImage } = currentFilm;

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
                  <Link to={`${AppRoutes.FILMS}/${id}`} className="breadcrumbs__link">{name}</Link>
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

        <AddReviewsFrom filmId={id} />
      </section>
    );
  }

  return <NotFoundPage />;
}

AddReviewPage.propTypes = {
  currentFilm: shape({
    name: string.isRequired,
    backgroundImage: string.isRequired,
    posterImage: string.isRequired,
    released: number.isRequired,
    genre: string.isRequired,
  }),
  onFetchCurrentFilm: func.isRequired,
};

const mapStateToProps = ({ filmsReducer, loginReducer }) => ({
  similarFilms: filmsReducer.similarFilms,
  currentFilm: filmsReducer.currentFilm,
  authorizationStatus: loginReducer.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchCurrentFilm(id) {
    dispatch(fetchCurrentFilm(id));
  },
});

export { AddReviewPage };
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewPage);
