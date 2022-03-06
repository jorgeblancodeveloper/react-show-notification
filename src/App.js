import LandingPage from "./pages/LandingPage/LandingPage";
import React from "react";
import "./scss/app.scss";
export const appState = React.createContext();
function App() {
  const appStateInitialData = {
    showNotification: false,
  };

  const [appStateData, setAppStateData] = React.useState(appStateInitialData);
  return (
    <appState.Provider value={appStateData}>
      <main>
        <div className="app">
          <LandingPage setAppStateData={setAppStateData} />
        </div>
      </main>
    </appState.Provider>
  );
}

export default App;
