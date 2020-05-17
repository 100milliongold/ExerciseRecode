import { List } from "immutable";
import { Exercise } from "./exercise";

const CREATE_DATES = "dates/CREATE" as const;
const MODIFY_DATES = "dates/MODIFY" as const;
const DELETE_DATES = "dates/DELETE" as const;

interface ExerciseList {
    date: Date,
    exerciseList: List<Exercise>
}

export interface Dates{
    list : List<ExerciseList>
}

export const createDates = (data: Dates) => ({
    type: CREATE_DATES,
    data,
});
export const modifyDates = (id: number, data: Dates) => ({
    type: MODIFY_DATES,
    id,
    data,
});
export const deleteDates = (id: number) => ({
    type: DELETE_DATES,
    id,
});

type DatesAction =
    | ReturnType<typeof createDates>
    | ReturnType<typeof modifyDates>
    | ReturnType<typeof deleteDates>;

type DatesState = {
    list: List<Dates>;
};

const initialState: DatesState = {
    list: List([]),
};

function dates(state: DatesState = initialState, action: DatesAction) {
    switch (action.type) {
        case CREATE_DATES:
            return {
                list: state.list.push(action.data),
            };
        case MODIFY_DATES:
            return {
                list: state.list.set(action.id, action.data),
            };
        case DELETE_DATES:
            return {
                list: state.list.delete(action.id),
            };
        default:
            return state;
    }
}

export default dates;