import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import {
  createExercise,
  modifyExercise,
  deleteExercise,
  Exercise,
} from "../modules/exercise";
import ExerciseRecode from "../components/ExerciseRecode";

export default function ExerciseContainer() {
  const list = useSelector((state: RootState) => state.exercise.daily.list);
  const dispatch = useDispatch();

  const onCreate = (data: Exercise) => {
    console.log(data);

    dispatch(createExercise(data));
  };
  const onModify = (id: number, data: Exercise) => {
    dispatch(modifyExercise(id, data));
  };
  const onDelete = (id: number) => {
    dispatch(deleteExercise(id));
  };

  console.log(list);

  return (
    <ExerciseRecode
      list={list}
      onCreate={onCreate}
      onModify={onModify}
      onDelete={onDelete}
    />
  );
}
