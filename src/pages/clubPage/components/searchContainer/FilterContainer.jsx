import React from 'react';
import { StyledFilterContainer, FilterButton } from './FilterContainer.styled';

const FilterContainer = () => {
    const filters = ["전체", "디자인 문구", "홈/리빙", "캐릭터/굿즈", "파티/행사","출판", "의류", "예술"];

    return (
        <StyledFilterContainer>
            {
                filters.map(
                    (menu, idx) => <FilterButton key={idx}>{menu}</FilterButton>
                )
            }
        </StyledFilterContainer>
    );
};

export default FilterContainer;