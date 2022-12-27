import { MdCheckCircle, MdDeleteOutline } from 'react-icons/md'
import { FaRegCircle } from 'react-icons/fa'
import { Task } from '../../pages/Home';

import { Container } from "./styles";

interface TasksProps {
    task: Task;
    checked: (task: Task) => void;
    handleDelete: (task: Task) => void;
}

export function Tasks({ task, checked, handleDelete }: TasksProps) {
    return (
        <Container taskChecked={task.checked}>
            <div>
                {task.checked ? (
                    <MdCheckCircle size={24} color="#5E60CE" onClick={() => checked(task)} />
                ) : (
                    <FaRegCircle size={24} color="#4EA8DE" onClick={() => checked(task)} />
                )}
                <span>{task.description}</span>
            </div>
            <button type="button">
                <MdDeleteOutline size={20} color="#808080" onClick={() => handleDelete(task)} />
            </button>
        </Container>
    )
}