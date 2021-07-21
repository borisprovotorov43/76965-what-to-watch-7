import React, { memo, useRef } from 'react';
import PropTypes from 'prop-types';

function SmallVideoPlayer({ source }) {
  const videoPlayer = useRef(null);

  if (source) {
    setTimeout(() => {
      const video = videoPlayer.current;
      video && video.play();
    }, 1000);
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
