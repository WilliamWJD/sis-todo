import { Container } from "./styles";

export function NewTaskBox() {
    return (
        <Container>
            <input type="text" placeholder="Adicine uma nova tarefa" />
            <button type="button">Criar +</button>
        </Container>
    )
}