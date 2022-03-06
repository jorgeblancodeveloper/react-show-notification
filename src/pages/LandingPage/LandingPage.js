import { Button } from "../../elements/Button/Button";
import { Notification } from "../../components/Notification/Notification";
import { appState } from "../../App";
const LandingPage = ({ setAppStateData }) => {
  const showNotification = (state, data) => {
    setAppStateData({ ...state, ...data });
  };

  return (
    <appState.Consumer>
      {(values) => {
        return (
          <>
            <div className="title">Show notification</div>
            <Button
              onClick={() =>
                showNotification(values, { showNotification: true })
              }
            >
              GO!
            </Button>
            {values.showNotification && (
              <Notification
                onClose={() =>
                  showNotification(values, { showNotification: false })
                }
              >
                <p>Notification content</p>
              </Notification>
            )}
          </>
        );
      }}
    </appState.Consumer>
  );
};
export default LandingPage;
