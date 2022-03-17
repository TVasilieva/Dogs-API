import { FC } from "react";
import { Provider } from "react-redux";
import MainPage from "./pages/MainPage";

import { store } from "./state/index";

const App: FC = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default App;
