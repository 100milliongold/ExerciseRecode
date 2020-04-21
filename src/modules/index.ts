import { combineReducers } from "redux";
import counter from "./counter";
import exercise from "./exercise";

const rootReducer = combineReducers({
  counter,
  exercise,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
