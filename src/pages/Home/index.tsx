import { useState } from 'react';
import { EmptyTasks } from '../../components/EmptyTasks';
import { Header } from '../../components/Header';
import { HeaderTasks } from '../../components/HeaderTasks';
import { NewTaskBox } from '../../components/NewTaskBox';
import { Tasks } from '../../components/Tasks';

import { Container, Content } from './styles';

export function Home() {
    const [tasks, setTasks] = useState(true);

    return (
        <Container>
            <Header />

            <Content>
                <NewTaskBox />
                <HeaderTasks />
                {!tasks ?
                    (<EmptyTasks />) :
                    (
                        <>
                            <Tasks />
                            <Tasks />
                            <Tasks />
                            <Tasks />
                            <Tasks />
                            <Tasks />
                        </>
                    )
                }
            </Content>
        </Container>
    )
}