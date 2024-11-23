import React from 'react';
import { StyledFilterContainer, FilterButton } from './FilterContainer.styled';

const FilterContainer = ({onCategory}) => {
    const filters = [
        ["전체", ""],
        ["디자인 문구", "디자인/문구"],
        ["홈/리빙", "홈/리빙"],
        ["캐릭터/굿즈", "캐릭터/굿즈"],
        ["파티/행사", "파티/행사"],
        ["출판", "출판"],
        ["의류", "의류"],
        ["예술", "예술"]
    ];

    return (
        <StyledFilterContainer>
            {
                filters.map(
                    (menu, idx) => 
                        <FilterButton 
                            key={idx}
                            onClick={() => onCategory(menu[1])}>
                            {menu[0]}
                        </FilterButton>
                )
            }
        </StyledFilterContainer>
    );
};

export default FilterContainer;