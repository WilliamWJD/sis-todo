import { Container, BoxTasks, BoxCompleted } from "./styles";

interface HeaderTasks {
    createdTasks: number;
    checkedTasks: number;
}

export function HeaderTasks({ createdTasks, checkedTasks }: HeaderTasks) {
    return (
        <Container>
            <BoxTasks>
                <strong>Tarefas criadas</strong>
                <p>{createdTasks}</p>
            </BoxTasks>
            <BoxCompleted>
                <strong>Concluídas</strong>
                {createdTasks === 0 ? (
                    <p>0</p>
                ) : (
                    <p>{checkedTasks} de {createdTasks}</p>
                )}
            </BoxCompleted>
        </Container>
    )
}