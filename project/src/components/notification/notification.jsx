import React, { useEffect, useState } from 'react';
import { func, string } from 'prop-types';
import cx from 'classnames';
import { connect } from 'react-redux';
import { resetNotification } from '../../store/action';
import './notification.css';

function Notification({ notification, onResetNotification }) {
  const [isHideNotify, setHideNotify] = useState(false);

  useEffect(() => {
    setHideNotify(false);

    setTimeout(()=>{
      setHideNotify(true);
    }, 2000);
  },[notification, onResetNotification]);

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
      {notification}
    </div>
  );
}

Notification.propTypes = {
  notification: string.isRequired,
  onResetNotification: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onResetNotification() {
    dispatch(resetNotification());
  },
});

export { Notification };
export default connect(null, mapDispatchToProps)(Notification);
