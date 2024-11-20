import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FormListContainer,
  ListDescriptionContainer,
  ListTextContainer,
  ListTitle,
  RequiredMarker,
  ListDescription,
  InputContentContainer,
  InputContainer,
} from "../ClubRegisterPage.styled";

const ButtonContainer = styled.div`
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CategoryButton = styled.button`
  height: 40px;
  padding: 0 30px;
  border: 1px solid #757575;
  border-radius: 30px;
  flex-basis: auto;
  text-align: center;
  white-space: nowrap;

  background-color: ${({ $isSelected }) => ($isSelected ? "#00A8CC" : "white")};
  color: ${({ $isSelected }) => ($isSelected ? "white" : "black")};
`;

const categoryList = [
  "디자인 문구",
  "출판",
  "홈/리빙",
  "캐릭터/굿즈",
  "파티/행사",
  "의류",
  "예술",
];

const ClubCategory = ({ onChange, initialCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory || ""
  );

  useEffect(() => {
    setSelectedCategory(initialCategory || "");
  }, [initialCategory]);

  const handleCategory = (item) => {
    const newCategory = selectedCategory === item ? "" : item;
    setSelectedCategory(newCategory);
    onChange(newCategory);
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
      <InputContainer>
        <InputContentContainer>
          <ButtonContainer>
            {categoryList.map((item, idx) => (
              <CategoryButton
                key={idx}
                $isSelected={selectedCategory === item}
                onClick={() => handleCategory(item)}
              >
                {item}
              </CategoryButton>
            ))}
          </ButtonContainer>
        </InputContentContainer>
      </InputContainer>
    </FormListContainer>
  );
};
export default ClubCategory;
