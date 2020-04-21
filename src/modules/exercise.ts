import { List } from "immutable";

const CREATE_EXERCISE = "exercise/CREATE" as const;
const MODIFY_EXERCISE = "exercise/MODIFY" as const;
const DELETE_EXERCISE = "exercise/DELETE" as const;

export interface Exercise {
  name: string;
  conuter: number;
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
  list: List<Exercise>;
};

const initialState: ExerciseState = {
  list: List([]),
};

function exercise(state: ExerciseState = initialState, action: ExerciseAction) {
  switch (action.type) {
    case CREATE_EXERCISE:
      return {
        list: state.list.push(action.data),
      };
    case MODIFY_EXERCISE:
      return {
        list: state.list.set(action.id, action.data),
      };
    case DELETE_EXERCISE:
      return {
        list: state.list.delete(action.id),
      };
    default:
      return state;
  }
}

export default exercise;
