import { IconClose } from "../../elements/IconClose/IconClose";
import React from "react";
import sassVars from "../../scss/app.scss";

export const Notification = ({ children, onClose }) => {
  const timeOutRemove = 5000;
  const [timerCountdown, setTimerCountdown] = React.useState(
    timeOutRemove / 1000
  );
  React.useEffect(() => {
    const timer = setTimeout((e) => {
      if (timerCountdown === 0) {
        //clearInterval(timer);
        setNotificationStatus("--is-timedOut");
        setTimeout(onClose, sassVars.baseAnimationDuration * 2);
      } else {
        setTimerCountdown((prevCount) => prevCount - 1);
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerCountdown]);

  let countDownTimer;
  const [notificationStatus, setNotificationStatus] = React.useState("");

  const handleOnClose = () => {
    clearInterval(countDownTimer);
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
