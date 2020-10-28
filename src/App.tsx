import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">wwwwwwww</div>
    </Provider>
  );
}

export default App;
