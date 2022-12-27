import { useState } from 'react';
import { EmptyTasks } from '../../components/EmptyTasks';
import { Header } from '../../components/Header';
import { HeaderTasks } from '../../components/HeaderTasks';
import { NewTaskBox } from '../../components/NewTaskBox';
import { Tasks } from '../../components/Tasks';

import { Container, Content } from './styles';

export interface Task {
    id: string;
    description: string;
    inActive: boolean
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);

    function handleNewTask(newTask: Task) {
        setTasks([...tasks, newTask]);
    }

    return (
        <Container>
            <Header />

            <Content>
                <NewTaskBox
                    handleNewTask={handleNewTask}
                />
                <HeaderTasks />
                {tasks.length === 0 ?
                    (<EmptyTasks />) :
                    (
                        tasks.map((task: Task) => (
                            <Tasks
                                key={task.id}
                                task={task}
                            />
                        ))
                    )
                }
            </Content>
        </Container>
    )
}