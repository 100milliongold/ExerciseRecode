import React from 'react'
import { List } from 'immutable'
import { Exercise } from '../modules/exercise'


type ExerciseListProps = {
    list: List<Exercise>;
    onModify: (id: number, data: Exercise) => void;
    onDelete: (id: number) => void;
}

export default function ExerciseList({ list, onModify, onDelete } : ExerciseListProps) {
    return (
        <ul>
            {list.isEmpty() && <li>내용이 없습니다.</li>}
            {!list.isEmpty() &&
                list.map(({ name, raps, weight }, id) => (
                    <li>
                        <div><input type="text" name="name" value={name} onChange={e => onModify(id, { weight, raps, name: e.target.value })} /></div>
                        <div><input type="text" name="weight" value={weight} onChange={e => onModify(id, { name, raps, weight: parseInt(e.target.value) })} /></div>
                        <div><input type="text" name="raps" value={raps} onChange={e => onModify(id, { weight, name, raps: parseInt(e.target.value) })} /></div>
                        <i onClick={e => onDelete(id)}>X</i>
                    </li>
                ))}
        </ul>
    )
}
