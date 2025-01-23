import { createRoot } from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "antd";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#145da0",
            colorPrimaryHover: "#0E86D4",
            borderRadius: "5px",
            height: "45px",
          },
        },
        token: {
          borderRadius: "3px",
          colorPrimary: "#405138",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
);
