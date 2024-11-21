import styled from "styled-components";
import SearchBar from "./SearchBar";
import FilterContainer from "./FilterContainer";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 20px auto;
    gap: 20px;
`;

export const SearchContainer = () => {
    return (
        <Container>
            <SearchBar />
            <FilterContainer />
        </Container>
    );
}