import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function VideoPlayer({ videoLink }) {
  const videoPlayer = useRef(null);

  if (videoLink) {
    setTimeout(() =>{
      const video = videoPlayer.current;
      video && videoPlayer.current.play();
    }, 1000);
  }

  return (
    <video
      className="player__video"
      poster="img/player-poster.jpg"
      src={videoLink}
      ref={videoPlayer}
      muted
    />
  );
}

const { string } = PropTypes;

VideoPlayer.propTypes = {
  videoLink: string.isRequired,
};

export default VideoPlayer;
