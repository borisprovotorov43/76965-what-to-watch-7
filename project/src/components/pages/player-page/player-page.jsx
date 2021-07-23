import React, { useCallback, useEffect, useRef, useState } from 'react';
import { string, shape, func } from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCurrentFilm } from '../../../store/api-actions';
import { AppRoutes } from '../../../const';
import { getTimeVideo } from '../../../utils';
import NotFoundPage from '../not-found-page/not-found-page';
import Spinner from '../../spinner/spinner';

function PlayerPage({ currentFilm, onFetchCurrentFilm }) {
  const { id } = useParams();

  const videoPlayer = useRef(null);
  const progressBarRef = useRef(null);
  const togglerRef = useRef(null);

  const [playerState, setPlayerState] = useState(true);
  const [playerElapsedTime, setPlayerElapsedTime] = useState('00:00');
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    onFetchCurrentFilm(id);
  }, [id, onFetchCurrentFilm]);

  const handlePlayingToggleClick = useCallback(
    () => {
      setPlayerState((prev)=> !prev);
      const video = videoPlayer.current;

      if (video.paused) {
        video.play();
        video.muted = false;
      } else {
        video.pause();
      }
    },
    [],
  );

  const handlePlayerPauseClick = useCallback(
    () => videoPlayer.current.pause(),[],
  );

  const handleFullScreenClick = useCallback(
    () => {
      const video = videoPlayer.current;
      video.fullscreen ? video.exitFullscreen() : video.requestFullscreen();
    },
    [],
  );

  const handleMetadataLoaded = useCallback(
    () => {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    },
    [],
  );

  const updateProgressBar = useCallback(
    () => {
      const video = videoPlayer.current;
      const videoCurrentTime = videoPlayer.current.currentTime;
      const videoDuration = videoPlayer.current.duration;
      progressBarRef.current.value = video ? ((videoCurrentTime / videoDuration) * 100) : 0;
      togglerRef.current.style.left = `${video ? ((videoCurrentTime / videoDuration) * 100) : 0}%`;
      setPlayerElapsedTime(getTimeVideo(videoDuration, videoCurrentTime));
    },
    [],
  );

  if (currentFilm) {
    const { title, videoLink, backgroundImage } = currentFilm;

    return (
      <div className="player">
        {!isLoaded && <Spinner />}
        <video
          className="player__video"
          poster={backgroundImage}
          ref={videoPlayer}
          src={videoLink}
          onLoadedData={handleMetadataLoaded}
          onTimeUpdate={updateProgressBar}
          autoPlay
          muted
        />
        <Link to={AppRoutes.ROOT}>
          <button
            type="button"
            className="player__exit"
            onClick = {handlePlayerPauseClick}
          >
            Exit
          </button>
        </Link>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                ref={progressBarRef} value="30"
                max="100"
              />
              <div
                className="player__toggler"
                ref={togglerRef}
              >
                Toggler
              </div>
            </div>
            <div className="player__time-value">{playerElapsedTime}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={handlePlayingToggleClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                {!playerState ? <use xlinkHref="#play-s"></use> : <use xlinkHref="#pause"></use>}
              </svg>
              <span>{!playerState ? 'Play' : 'Pause'}</span>
            </button>
            <div className="player__name">{title}</div>

            <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
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

  return <NotFoundPage />;
}

PlayerPage.propTypes = {
  currentFilm: shape({
    name: string.isRequired,
    videoLink: string.isRequired,
    backgroundImage: string.isRequired,
  }),
  onFetchCurrentFilm: func.isRequired,
};

const mapStateToProps = ({ filmsReducer }) => ({
  currentFilm: filmsReducer.currentFilm,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchCurrentFilm(id) {
    dispatch(fetchCurrentFilm(id));
  },
});

export { PlayerPage };
export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);
