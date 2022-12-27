import { useState } from 'react';
import uuid from 'react-uuid';

import { Container } from "./styles";
import { Task } from '../../pages/Home';

interface NewTaskBoxProps {
    handleNewTask: (task: Task) => void;
}

export function NewTaskBox({ handleNewTask }: NewTaskBoxProps) {
    const [newTask, setNewTask] = useState('');

    function handleNewCreateTask() {
        const data = {
            id: uuid(),
            description: newTask,
            inActive: true
        } as Task

        handleNewTask(data);

        setNewTask('');
    }

    return (
        <Container>
            <input type="text" placeholder="Adicine uma nova tarefa" onChange={e => setNewTask(e.target.value)} value={newTask} />
            <button type="button" onClick={handleNewCreateTask}>Criar +</button>
        </Container>
    )
}