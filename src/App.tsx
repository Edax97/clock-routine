import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { store } from "./store/app/store";
import { ClockComponent } from "./components/clock-component/ClockComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ClockComponent />
      </div>
    </Provider>
  );
}

export default App;
