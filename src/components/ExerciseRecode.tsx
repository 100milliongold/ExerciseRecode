import React from "react";
import { List } from "immutable";
import { Exercise } from "../modules/exercise";
import ExerciseInput from './ExerciseInput'
import ExerciseList from './ExerciseList'

type ExerciseRecodeProps = {
  list: List<Exercise>;
  onCreate: (data: Exercise) => void;
  onModify: (id: number, data: Exercise) => void;
  onDelete: (id: number) => void;
}

const ExerciseRecode = ({
  list,
  onCreate,
  onModify,
  onDelete,
}: ExerciseRecodeProps) => {
  return (
    <div>
      <ExerciseList list={list} onModify={onModify} onDelete={onDelete}/>
      <ExerciseInput onCreate={onCreate}/>
    </div>
  );
};

export default ExerciseRecode;
