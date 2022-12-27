import { Container } from "./styles";

import EmptyTask from '../../images/EmptyTask.svg';

export function EmptyTasks() {
    return (
        <Container>
            <img src={EmptyTask} alt="Empty Tasks image" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </Container>
    )
}