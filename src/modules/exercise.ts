import { List } from "immutable";

const CREATE_EXERCISE = "exercise/CREATE" as const;
const MODIFY_EXERCISE = "exercise/MODIFY" as const;
const DELETE_EXERCISE = "exercise/DELETE" as const;

export interface Exercise {
  name: string;
  raps: number;
  weight: number;
}

export interface DailyExercise{
  list : List<Exercise>
  date : Date
}

export const createExercise = (data: Exercise) => ({
  type: CREATE_EXERCISE,
  data,
});
export const modifyExercise = (id: number, data: Exercise) => ({
  type: MODIFY_EXERCISE,
  id,
  data,
});
export const deleteExercise = (id: number) => ({
  type: DELETE_EXERCISE,
  id,
});

type ExerciseAction =
  | ReturnType<typeof createExercise>
  | ReturnType<typeof modifyExercise>
  | ReturnType<typeof deleteExercise>;

type ExerciseState = {
  list: List<DailyExercise>;
  daily: DailyExercise;
};

const initialState: ExerciseState = {
  list: List([]),
  daily: {
    date : new Date(),
    list: List([]),
  }
};

function exercise(state: ExerciseState = initialState, action: ExerciseAction) {
  switch (action.type) {
    case CREATE_EXERCISE:
      return {
        ...state,
        daily : {
          ...state.daily,
          list: state.daily.list.push(action.data)
        }
      };
    case MODIFY_EXERCISE:
      return {
        ...state,
        daily: {
          ...state.daily,
          list: state.daily.list.set(action.id, action.data),
        }
      };
    case DELETE_EXERCISE:
      return {
        ...state,
        daily: {
          ...state.daily,
          list: state.daily.list.delete(action.id),
        }
      };
    default:
      return state;
  }
}

export default exercise;
