import { MdCheckCircle, MdDeleteOutline } from 'react-icons/md'

import { Container } from "./styles";

export function Tasks() {
    return (
        <Container>
            <div>
                <MdCheckCircle size={24} color="#4EA8DE" />
                <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
            </div>
            <button type="button">
                <MdDeleteOutline size={20} color="#808080" />
            </button>
        </Container>
    )
}