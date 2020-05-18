import React, { useState } from "react";
import { Exercise } from '../modules/exercise';


type ExerciseInputProps = {
    onCreate: (data: Exercise) => void;
}

export default function ExerciseInput({ onCreate }: ExerciseInputProps) {
    const [formData, setFormData] = useState({
        name: "",
        raps: 0,
        weight: 0
    });
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        onCreate(formData);
        setFormData({
            name: "",
            raps: 0,
            weight: 0,
        });
    }
    return (
        <div>
            <form
                onSubmit={onSubmitHandler}
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
                    <label>raps</label>
                    <input
                        type="number"
                        name="raps"
                        value={formData.raps}
                        onChange={({ target: { value } }) =>
                            setFormData({ ...formData, raps: parseInt(value) })
                        }
                    />
                </div>
                <div>
                    <label>weight</label>
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={({ target: { value } }) =>
                            setFormData({ ...formData, weight: parseInt(value) })
                        }
                    />
                </div>
                <button type="submit">저장하기</button>
            </form>
        </div>
    )
}
ExerciseInput.defalutProps = {
    onCreate: () => console.warn('onCreate')
}