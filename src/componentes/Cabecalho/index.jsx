import styled from "styled-components";
import CampoTexto from "../../CampoTexto";

const HearderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }

`
const Cabecalho = () => {
    return (
        <HearderEstilizado>
            <img src="/imagens/logo.png"/>
            <CampoTexto/>
        </HearderEstilizado>
    )
}

export default Cabecalho;