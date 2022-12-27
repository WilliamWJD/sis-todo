import { Container, BoxTasks, BoxCompleted } from "./styles";

export function HeaderTasks() {
    return (
        <Container>
            <BoxTasks>
                <strong>Tarefas criadas</strong>
                <p>0</p>
            </BoxTasks>
            <BoxCompleted>
                <strong>Concluídas</strong>
                <p>0</p>
            </BoxCompleted>
        </Container>
    )
}