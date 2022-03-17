import { combineReducers, createStore, applyMiddleware, Action } from "redux";
import createSagaMiddleware from "redux-saga";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rootSaga } from "./root-saga";

import { composeWithDevTools } from "redux-devtools-extension";
import { dogsReducer } from "./breeds/reducer";

export const rootReducer = combineReducers({
  dogs: dogsReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface ActionPayload<Payload> extends Action {
  payload: Payload;
}
