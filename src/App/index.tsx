import Header from "./components/Header";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { setupStore } from "../store";
import "../layout/styles.css";

const store = setupStore();

export const App = () => {
  return (
    <div className="main">
      <Header />
      <Provider store={store}>
        <Shop />
      </Provider>
      <Footer />
    </div>
  );
};
