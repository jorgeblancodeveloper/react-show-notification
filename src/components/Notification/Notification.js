import { IconClose } from "../../elements/IconClose/IconClose";
import React from "react";
import sassVars from "../../scss/app.scss";

export const Notification = ({ children, onClose }) => {
  const timeOutRemove = 5000;
  const [timerCountdown, setTimerCountdown] = React.useState(
    timeOutRemove / 1000
  );
  const [notificationStatus, setNotificationStatus] = React.useState("");
  React.useEffect(() => {
    const countDownTimer = setTimeout(() => {
      if (timerCountdown === 0) {
        setNotificationStatus("--is-timedOut");
        setTimeout(onClose, sassVars.baseAnimationDuration * 2);
      } else {
        setTimerCountdown(prevCount => prevCount - 1);
      }
    }, 1000);
    return () => {
      clearTimeout(countDownTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerCountdown]);

  const handleOnClose = () => {
    setNotificationStatus("--is-closing");
    setTimeout(onClose, sassVars.baseAnimationDuration);
  };

  return (
    <div className={`notification${notificationStatus}`}>
      <div className="notification__card">
        <div className="notification__close">
          {notificationStatus !== "--is-timedOut" && (
            <IconClose onClose={handleOnClose} />
          )}
        </div>
        <div className="notification__body">
          {children}
          <div className="notification__countdown">
            (will disappear in {timerCountdown} seconds...)
          </div>
        </div>
      </div>
    </div>
  );
};
