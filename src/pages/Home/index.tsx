import { Header } from '../../components/Header';
import { NewTaskBox } from '../../components/NewTaskBox';

import { Container, Content } from './styles';

export function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <NewTaskBox />
            </Content>
        </Container>
    )
}