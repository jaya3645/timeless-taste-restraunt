import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../redux/saga/index";
import menuReducer from "./reducers/menuReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    root: menuReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
