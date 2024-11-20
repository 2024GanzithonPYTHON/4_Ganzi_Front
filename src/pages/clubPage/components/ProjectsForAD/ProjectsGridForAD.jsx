import styled from "styled-components";


export const ProjectsGridForAD = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;