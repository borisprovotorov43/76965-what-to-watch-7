import React from 'react';
import PropTypes from 'prop-types';

function PlayerPage({ film }) {
  const { title, videoLink} = film[0];

  return (
    <div className="player">
      <video
        className="player__video"
        poster="img/player-poster.jpg"
        autoPlay
        muted
        src={videoLink}
      />

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100" />
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const { string, arrayOf, shape } = PropTypes;

PlayerPage.propTypes = {
  film: arrayOf(
    shape({
      title: string.isRequired,
      videoLink: string.isRequired,
    }).isRequired,
  ),
};

export default PlayerPage;
