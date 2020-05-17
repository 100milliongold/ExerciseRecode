import { combineReducers } from "redux";
import exercise from "./exercise";

const rootReducer = combineReducers({
  exercise,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
