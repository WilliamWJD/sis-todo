import { MdCheckCircle, MdDeleteOutline } from 'react-icons/md'
import { Task } from '../../pages/Home';

import { Container } from "./styles";

interface TasksProps {
    task: Task;
}

export function Tasks({ task }: TasksProps) {

    return (
        <Container>
            <div>
                <MdCheckCircle size={24} color="#4EA8DE" />
                <span>{task.description}</span>
            </div>
            <button type="button">
                <MdDeleteOutline size={20} color="#808080" />
            </button>
        </Container>
    )
}