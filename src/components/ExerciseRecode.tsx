import React, { useState } from "react";
import { List } from "immutable";
import { Exercise } from "../modules/exercise";

interface ExerciseRecodeProps {
  list: List<Exercise>;
  onCreate: (data: Exercise) => void;
  onModify: (id: number, data: Exercise) => void;
  onDelete: (id: number) => void;
}

const ExerciseRecode: React.FunctionComponent<ExerciseRecodeProps> = ({
  list,
  onCreate,
  onModify,
  onDelete,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    conuter: 0,
  });

  return (
    <div>
      <ul>
        {list.isEmpty() && <li>내용이 없습니다.</li>}
        {!list.isEmpty() &&
          list.map((data) => (
            <li>
              <p>{data.name}</p>
              <p>{data.conuter}</p>
            </li>
          ))}
      </ul>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onCreate(formData);
            setFormData({
              name: "",
              conuter: 0,
            });
          }}
        >
          <div>
            <label>name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={({ target: { value } }) =>
                setFormData({ ...formData, name: value })
              }
            />
          </div>
          <div>
            <label>conuter</label>
            <input
              type="number"
              name="conuter"
              value={formData.conuter}
              onChange={({ target: { value } }) =>
                setFormData({ ...formData, conuter: parseInt(value) })
              }
            />
          </div>
          <button type="submit">저장하기</button>
        </form>
      </div>
    </div>
  );
};

export default ExerciseRecode;
