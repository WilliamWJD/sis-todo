import { EmptyTasks } from '../../components/EmptyTasks';
import { Header } from '../../components/Header';
import { HeaderTasks } from '../../components/HeaderTasks';
import { NewTaskBox } from '../../components/NewTaskBox';

import { Container, Content } from './styles';

export function Home() {
    return (
        <Container>
            <Header />

            <Content>
                <NewTaskBox />
                <HeaderTasks />
                <EmptyTasks />
            </Content>
        </Container>
    )
}