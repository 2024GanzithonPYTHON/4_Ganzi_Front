import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FormListContainer,
  ListDescriptionContainer,
  ListTextContainer,
  ListTitle,
  RequiredMarker,
  ListDescription,
} from "../ClubRegisterPage.styled";

const ButtonContainer = styled.div`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CategoryButton = styled.button`
  height: 40px;
  padding: 0 50px;
  border: 1px solid #757575;
  border-radius: 30px;
  flex-grow: 1;
  flex-basis: auto;
  text-align: center;
  white-space: nowrap;

  background-color: ${({ $isSelected }) => ($isSelected ? "#00A8CC" : "white")};
  color: ${({ $isSelected }) => ($isSelected ? "white" : "black")};
`;

const categoryList = [
  "전체",
  "디자인 문구",
  "홈/리빙",
  "캐릭터/굿즈",
  "파티/행사",
  "출판",
  "의류",
  "향수/뷰티",
  "영화/비디오",
];

const ClubCategory = ({ onChange, initialCategory }) => {
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory || []
  );

  useEffect(() => {
    setSelectedCategories(initialCategory || []);
  }, [initialCategory]);

  const handleCategory = (item) => {
    setSelectedCategories((prev) => {
      const newResult = !prev.includes(item)
        ? [...prev, item]
        : prev.filter((category) => category !== item);

      onChange(newResult);
      return newResult;
    });
  };

  return (
    <FormListContainer>
      <ListDescriptionContainer>
        <ListTextContainer>
          <ListTitle>
            프로젝트 카테고리<RequiredMarker> ⁎</RequiredMarker>
          </ListTitle>
          <ListDescription>
            프로젝트 성격과 가장 일치하는 카테고리를 선택해주세요.
          </ListDescription>
        </ListTextContainer>
      </ListDescriptionContainer>
      <ButtonContainer>
        {categoryList.map((item, idx) => (
          <CategoryButton
            key={idx}
            $isSelected={selectedCategories.includes(item)}
            onClick={() => handleCategory(item)}
          >
            {item}
          </CategoryButton>
        ))}
      </ButtonContainer>
    </FormListContainer>
  );
};
export default ClubCategory;
