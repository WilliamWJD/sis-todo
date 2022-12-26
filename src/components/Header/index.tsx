import { Container } from "./styles";

import LogoImg from '../../images/Logo.svg';

export function Header() {
    return (
        <Container>
            <img src={LogoImg} alt="Logo Sis-TODO" />
        </Container>
    )
}