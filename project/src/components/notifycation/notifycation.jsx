import React, { useEffect, useState } from 'react';
import { func, string } from 'prop-types';
import cx from 'classnames';
import { connect } from 'react-redux';
import { resetNotification } from '../../store/action';
import './notifycation.css';

function Notifycation({ notifycation, onResetNotification }) {
  const [isHideNotify, setHideNotify] = useState(false);

  useEffect(() => {
    setHideNotify(false);

    setTimeout(()=>{
      setHideNotify(true);
    }, 2000);
  },[notifycation, onResetNotification]);

  const handleCloseNotifyClick = () => {
    setHideNotify(true);
  };

  return (
    <div className={cx('notify', { 'notify--hide': isHideNotify })}>
      <button className="notify__btn-close" type="button" onClick={handleCloseNotifyClick}>
        <svg viewBox="0 0 14 16" width="14" height="14">
          <use xlinkHref="#close"></use>
        </svg>
      </button>
      {notifycation}
    </div>
  );
}

Notifycation.propTypes = {
  notifycation: string.isRequired,
  onResetNotification: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onResetNotification() {
    dispatch(resetNotification());
  },
});

export { Notifycation };
export default connect(null, mapDispatchToProps)(Notifycation);
