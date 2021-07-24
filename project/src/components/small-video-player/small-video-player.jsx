import React, { memo, useRef } from 'react';
import PropTypes from 'prop-types';
import { VIDEO_PLAY_DELAY } from '../../const';

function SmallVideoPlayer({ source }) {
  const videoPlayer = useRef(null);

  if (source) {
    setTimeout(() => {
      const video = videoPlayer.current;
      video && video.play();
    }, VIDEO_PLAY_DELAY);
  }

  return (
    <video
      className="player__video"
      poster="img/player-poster.jpg"
      src={source}
      ref={videoPlayer}
      muted
    />
  );
}

const { string } = PropTypes;

SmallVideoPlayer.propTypes = {
  source: string.isRequired,
};

export default memo(SmallVideoPlayer);
