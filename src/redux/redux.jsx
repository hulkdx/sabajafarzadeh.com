import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";

let middlewares = applyMiddleware(thunk);
if (process.env.CONFIG === "development") {
  /* eslint-disable */
  const { composeWithDevTools } = require("redux-devtools-extension");
  /* eslint-enable */
  middlewares = composeWithDevTools(middlewares);
}
const store = createStore(rootReducer, middlewares);

export { store, Provider };
